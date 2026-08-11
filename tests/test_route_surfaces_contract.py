import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def read(relative: str) -> str:
    return (ROOT / relative).read_text(encoding="utf-8")


class RouteSurfacesContractTests(unittest.TestCase):
    def test_nav_footer_and_layout_consume_the_public_route_registry(self) -> None:
        nav = read("src/features/home/components/LandingNav.tsx")
        footer = read("src/features/home/components/LandingFooter.tsx")
        shell = read("src/components/layout/LayoutShell.tsx")

        self.assertIn("PUBLIC_ROUTES", nav)
        self.assertIn("PUBLIC_ROUTES", footer)
        self.assertIn("findPublicRoute", shell)
        self.assertIn("publicRoute.key !== 'home'", shell)
        self.assertIn("publishedRoute", nav)
        self.assertIn("publishedRoute", footer)

    def test_secondary_page_anchors_return_to_home(self) -> None:
        nav = read("src/features/home/components/LandingNav.tsx")
        footer = read("src/features/home/components/LandingFooter.tsx")

        self.assertIn("`/#${id}`", nav)
        self.assertIn("`/#${id}`", footer)
        self.assertIn("isHome ? `#${id}`", nav)
        self.assertIn("isHome ? `#${id}`", footer)

    def test_blog_and_other_optional_links_are_registry_gated(self) -> None:
        nav = read("src/features/home/components/LandingNav.tsx")
        footer = read("src/features/home/components/LandingFooter.tsx")

        self.assertNotIn('<Link href="/blog"', nav)
        self.assertNotIn('<FooterRouteLink href="/blog"', footer)
        self.assertIn("publishedRoute('blog')", nav)
        self.assertIn("publishedRoute('blog')", footer)

    def test_sitemap_and_llms_use_the_same_public_routes(self) -> None:
        sitemap = read("src/app/sitemap.ts")
        llms = read("src/app/llms.txt/route.ts")
        llms_full = read("src/app/llms-full.txt/route.ts")

        self.assertIn("PUBLIC_ROUTES", sitemap)
        self.assertNotIn('const PATHS = ["", "/contact", "/blog"]', sitemap)
        self.assertIn("isPublicRoute('/blog')", sitemap)
        self.assertIn("PUBLIC_ROUTES", llms)
        self.assertIn("PUBLIC_ROUTES", llms_full)
        self.assertIn("FAMILY.filter", llms)

    def test_machine_endpoints_are_generated_from_product_facts(self) -> None:
        route_files = (
            "src/app/.well-known/ai.txt/route.ts",
            "src/app/ai/summary.json/route.ts",
            "src/app/ai/service.json/route.ts",
            "src/app/ai/faq.json/route.ts",
        )
        for relative in route_files:
            with self.subTest(relative=relative):
                source = read(relative)
                self.assertIn("SITE", source)

        self.assertFalse((ROOT / "public/.well-known/ai.txt").exists())
        self.assertFalse((ROOT / "public/ai/summary.json").exists())
        self.assertFalse((ROOT / "public/ai/service.json").exists())
        self.assertFalse((ROOT / "public/ai/faq.json").exists())
        self.assertIn("localeUrl", read("src/features/product-pages/machine.ts"))
        robots = read("src/app/robots.ts")
        ai_policy = read("src/app/.well-known/ai.txt/route.ts")
        self.assertIn("AI_CRAWLERS", robots)
        self.assertIn("AI_CRAWLERS", ai_policy)
        self.assertIn("MACHINE_DISALLOW", robots)
        self.assertIn("MACHINE_DISALLOW", ai_policy)

    def test_layout_advertises_the_generated_machine_endpoints(self) -> None:
        layout = read("src/app/[locale]/layout.tsx")
        for marker in (
            'rel="ai-summary"',
            'rel="ai-service"',
            'rel="ai-faq"',
            'rel="llms"',
            'rel="llms-full"',
        ):
            with self.subTest(marker=marker):
                self.assertIn(marker, layout)

    def test_secondary_seo_helpers_share_canonical_and_schema_inputs(self) -> None:
        seo = read("src/features/product-pages/seo.ts")

        self.assertIn("buildAlternates", seo)
        self.assertIn("findPublicRoute", seo)
        self.assertIn("BreadcrumbList", seo)
        self.assertIn("FAQPage", seo)
        self.assertIn("'price' in offer && offer.price", seo)


if __name__ == "__main__":
    unittest.main()
