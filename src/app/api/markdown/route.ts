import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const path = searchParams.get("path") || "";

  // Helper to construct markdown response
  const mdResponse = (content: string, status = 200) => {
    return new NextResponse(content, {
      status,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        Vary: "Accept, Accept-Encoding",
      },
    });
  };

  // Known paths
  const knownPaths = ["", "products", "contact", "inquiry", "harvest", "quality-policy", "about"];
  const isKnown = knownPaths.includes(path.replace(/\/$/, "")) || path.startsWith("products/") || path.startsWith("categories/");

  if (isKnown) {
    const markdown = `# Triad Global Trading\n\nWelcome to Triad Global Trading. We are premier Indian import export global traders.\n\n[View our Products](/products)\n\n[Contact Us](/contact)\n\n[View Agent Instructions](/llms.txt)\n\n[Sitemap](/sitemap.xml)`;
    return mdResponse(markdown, 200);
  }

  // 404 Fallback Markdown
  const notFoundMarkdown = `# 404 - Page Not Found\n\nThe requested path \`/${path}\` does not exist.\n\n## Recovery Links\n- [Agent Instructions](/llms.txt)\n- [Sitemap](/sitemap.xml)\n- [Home](/)\n- [Products](/products)`;
  return mdResponse(notFoundMarkdown, 404);
}
