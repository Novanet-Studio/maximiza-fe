export const getImageUrl = (imgObj: any) => imgObj?.url || "";

export const getImageAlt = (imgObj: any) =>
  imgObj?.alternativeText || "Imagen maximiza";

export const truncateText = (text: string, length: number) => {
  if (!text) return "";

  return text.length > length ? text.substring(0, length) + "..." : text;
};

export const formatDate = (dateString: string | undefined | null): string => {
  if (!dateString) return "";

  const parts = dateString.split("-");

  // Aseguramos que tenga el formato YYYY-MM-DD
  if (parts.length !== 3) return dateString;

  const [year, month, day] = parts;

  return `${day}/${month}/${year}`;
};

export const minAgeDate = (age: number): string => {
  const today = new Date();
  const date = new Date(
    today.getFullYear() - age,
    today.getMonth(),
    today.getDate(),
  );

  return date.toISOString().split("T")[0] ?? "";
};

export const formatAmount = (
  value: string | number | undefined | null,
): string => {
  if (value === "" || value === undefined || value === null) return "";

  const normalizedValue = String(value).replace(",", ".");

  const number = parseFloat(normalizedValue);

  if (isNaN(number)) return "";

  return (
    new Intl.NumberFormat("es-VE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      useGrouping: true,
    }).format(number) + " Bs"
  );
};