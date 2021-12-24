import classNames from "classnames";
import { Bookmark } from "../../model/Bookmark";

const REFERENCE_DOCUMENT_URL =
  "https://github.com/simple-icons/simple-icons/blob/HEAD/slugs.md";

interface Props {
  editMode?: boolean;
  bookmarkId?: string;
  bookmarkNameValue: string;
  bookmarkURLValue: string;
  bookmarkSiSlugValue: string;
  bookmarkUseFaviconValue: boolean;
  formNameError: boolean;
  formUrlError: boolean;
  onBookmarkNameChange: (newName: string) => void;
  onBookmarkURLChange: (newURL: string) => void;
  onBookmarkSiSlugChange: (newSiSlug: string) => void;
  onBookmarkUseFaviconChange: (newUseFavicon: boolean) => void;
  onSubmit: () => void;
  onEdit: () => void;
  onDelete: (bookmarkId: string) => void;
}

export const AddBookmarkForm: React.FC<Props> = ({
  editMode,
  bookmarkId,
  bookmarkNameValue,
  bookmarkURLValue,
  bookmarkSiSlugValue,
  bookmarkUseFaviconValue,
  formNameError,
  formUrlError,
  onBookmarkNameChange,
  onBookmarkURLChange,
  onBookmarkSiSlugChange,
  onBookmarkUseFaviconChange,
  onSubmit,
  onEdit,
  onDelete,
}) => {
  const containerStyle = classNames(["flex", "flex-col", "my-2"]);
  const labelStyle = classNames(["mx-1", "text-sm", "italic", "font-bold"]);
  const inputStyle = classNames(["my-2", "mx-1", "p-2", "border"]);
  const helperLabelStyle = classNames(["mx-2", "text-xs", "italic"]);

  const formNameClasses = classNames(inputStyle, {
    "border-red-500": formNameError,
  });

  const formUrlClasses = classNames(inputStyle, {
    "border-red-500": formUrlError,
  });

  const headerText = editMode ? "Edit Bookmark" : "Add Bookmark";
  const submitText = editMode ? "Save Changes" : "Add Bookmark";

  return (
    <div className="flex flex-col">
      <h2 className="mx-1 text-lg font-bold">{headerText}</h2>
      {/* Bookmark Name */}
      <div className={containerStyle}>
        <label className={labelStyle}>Bookmark Name (Required)</label>
        <input
          value={bookmarkNameValue}
          onChange={(e) => onBookmarkNameChange(e.target.value)}
          className={formNameClasses}
          placeholder="Bookmark Name"
        />
      </div>

      {/* Bookmark URL */}
      <div className={containerStyle}>
        <label className={labelStyle}>Bookmark URL (Required)</label>
        <input
          value={bookmarkURLValue}
          onChange={(e) => onBookmarkURLChange(e.target.value)}
          className={formUrlClasses}
          placeholder="Bookmark URL"
        />
      </div>

      {/* Simple Icons Slug */}
      <div className={containerStyle}>
        <label className={labelStyle}>Simple Icon Slug (Optional)</label>
        <input
          value={bookmarkSiSlugValue}
          onChange={(e) => onBookmarkSiSlugChange(e.target.value)}
          className={inputStyle}
          placeholder="Simple Icons Slug"
        />
        <p className={helperLabelStyle}>
          Refer to this{" "}
          <a
            className="text-blue-600 hover:underline"
            href={REFERENCE_DOCUMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            guide
          </a>{" "}
          for all slugs
        </p>
      </div>

      {/* Use Favicons */}
      <div className={containerStyle}>
        <label className="mx-1 font-bold">
          Use Favicon
          <input
            checked={bookmarkUseFaviconValue}
            onChange={(e) => onBookmarkUseFaviconChange(e.target.checked)}
            className="ml-2"
            type="checkbox"
          />
        </label>
        <p className={helperLabelStyle}>
          Overrides Simple Icons. May not always work properly.
        </p>
      </div>

      {/* Submit Button */}
      <div>
        {editMode && bookmarkId && (
          <button
            onClick={() => onDelete(bookmarkId)}
            className="border p-4 font-bold mx-1 my-2 bg-red-500 text-white"
          >
            Delete Bookmark
          </button>
        )}
        <button
          onClick={editMode ? onEdit : onSubmit}
          className="border p-4 font-bold mx-1 my-2 bg-green-500 text-white"
        >
          {submitText}
        </button>
      </div>
    </div>
  );
};