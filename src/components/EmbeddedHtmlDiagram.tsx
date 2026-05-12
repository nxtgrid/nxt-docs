import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export type EmbeddedHtmlDiagramProps = {
  title: string;
  /**
   * Path under `static/` (POSIX slashes). Example:
   * `repos/nxt-backend/diagrams/meter-communications-flow.html`
   */
  path: string;
  /** Iframe height in CSS pixels. */
  height?: number;
};

function normalizeStaticPath(path: string): string {
  const trimmed = path.trim();
  return trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
}

/**
 * Embeds mirrored HTML diagrams or similar full-page assets from `static/`.
 */
export default function EmbeddedHtmlDiagram({
  title,
  path,
  height = 720,
}: EmbeddedHtmlDiagramProps): React.ReactNode {
  const url = useBaseUrl(normalizeStaticPath(path));

  return (
    <figure className="embedded-html-diagram">
      <iframe
        title={title}
        src={url}
        width="100%"
        height={height}
        loading="lazy"
      />
      <figcaption className="embedded-html-diagram__caption">
        <a href={url} target="_blank" rel="noopener noreferrer">
          Open diagram in new tab
        </a>
      </figcaption>
    </figure>
  );
}
