import { differenceInMinutes, format } from "date-fns";

export const formatToMinutes = (laterDate: string, soonerDate: Date) => {
  return differenceInMinutes(laterDate, soonerDate);
};

export const formatDate = (date: string) => {
  return format(date, "MMM dd hh:mm a");
};




