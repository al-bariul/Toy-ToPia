import React from "react";

/**
 * ToyTopiaTable — Reusable Table Component
 *
 * Uses the design system's .tt-table-wrapper and .tt-table classes defined
 * in index.css, which fully support both light and dark mode via DaisyUI
 * semantic tokens (oklch(var(--b1)), oklch(var(--b2)), oklch(var(--bc))).
 *
 * Props:
 *   columns   — Array<{ key: string, label: string, align?: 'left'|'right'|'center', render?: (value, row) => ReactNode }>
 *   data      — Array<object>  — the rows to display
 *   keyField  — string        — unique key field in each row (default: 'id')
 *   loading   — boolean       — show skeleton loader
 *   emptyText — string        — text when data is empty
 *   caption   — string        — optional accessible <caption>
 *   className — string        — extra classes for outer wrapper
 *
 * Usage example:
 *   <Table
 *     columns={[
 *       { key: 'toyName', label: 'Toy Name' },
 *       { key: 'price',   label: 'Price ($)', align: 'right', render: (v) => `$${v}` },
 *       { key: 'rating',  label: 'Rating',    render: (v) => `⭐ ${v}` },
 *     ]}
 *     data={toys}
 *     keyField="toyId"
 *   />
 */

/* Skeleton row shown while data is loading */
const SkeletonRow = ({ columns }) => (
  <tr>
    {columns.map((col, i) => (
      <td key={i} className="px-5 py-4">
        <div className="h-4 rounded-lg bg-slate-200 animate-pulse w-3/4" />
      </td>
    ))}
  </tr>
);

/* Empty state */
const EmptyState = ({ text, columns }) => (
  <tr>
    <td colSpan={columns.length} className="py-16 text-center">
      <div className="flex flex-col items-center gap-3">
        <svg
          className="w-12 h-12 text-slate-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 6h18M3 14h18M3 18h18" />
        </svg>
        <p className="text-sm font-medium tt-text-muted">{text}</p>
      </div>
    </td>
  </tr>
);

/* Main Table */
const Table = ({
  columns = [],
  data = [],
  keyField = "id",
  loading = false,
  emptyText = "No records found.",
  caption,
  className = "",
}) => {
  const alignClass = (align) => {
    if (align === "right") return "text-right";
    if (align === "center") return "text-center";
    return "text-left";
  };

  return (
    <div
      className={`tt-table-wrapper ${className}`}
      role="region"
      aria-label={caption || "Data table"}
    >
      <table className="tt-table" aria-busy={loading}>
        {caption && <caption className="sr-only">{caption}</caption>}

        {/* Header */}
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} scope="col" className={alignClass(col.align)}>
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {loading ? (
            Array.from({ length: 5 }).map((_, i) => (
              <SkeletonRow key={i} columns={columns} />
            ))
          ) : data.length === 0 ? (
            <EmptyState text={emptyText} columns={columns} />
          ) : (
            data.map((row) => (
              <tr key={row[keyField]}>
                {columns.map((col) => (
                  <td key={col.key} className={alignClass(col.align)}>
                    {col.render
                      ? col.render(row[col.key], row)
                      : row[col.key] ?? "—"}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
