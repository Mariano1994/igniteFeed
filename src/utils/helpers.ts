import { formatDistance, subDays } from "date-fns";

export const DateFormatterFns = (firstDate: Date, secondDate: Date) => {
  return formatDistance(subDays(new Date(firstDate), 0), new Date(secondDate), {
    addSuffix: true,
  });
};
