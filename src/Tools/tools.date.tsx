import { format } from "date-fns";

export function handleFormatDate (pDate : string) {
  const date = new Date(pDate);
  return format(date, "dd/MM/yyyy H:mm");
}
