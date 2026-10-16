export interface RestaurantStatus {
  isOpen: boolean;
  statusText: string;
  badgeLabel: string;
  hoursDetail: string;
}

export function getRestaurantStatus(): RestaurantStatus {
  try {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Karachi",
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    });
    
    const parts = formatter.formatToParts(new Date());
    const hour = parseInt(parts.find((p) => p.type === "hour")?.value || "0", 10);
    const minute = parseInt(parts.find((p) => p.type === "minute")?.value || "0", 10);
    const currentMinutes = hour * 60 + minute;

    // Opening: 11:00 AM = 11 * 60 = 660 minutes
    // Closing: 3:00 AM next day = 3 * 60 = 180 minutes
    const isOpen = currentMinutes >= 660 || currentMinutes < 180;

    if (isOpen) {
      return {
        isOpen: true,
        statusText: "Open Now • Closes 3:00 AM",
        badgeLabel: "Open Now",
        hoursDetail: "Serving Dine-in, Takeaway & Late-Night Delivery",
      };
    } else {
      return {
        isOpen: false,
        statusText: "Opens at 11:00 AM",
        badgeLabel: "Opens 11:00 AM",
        hoursDetail: "Accepting Advance Orders for 11 AM Delivery",
      };
    }
  } catch {
    return {
      isOpen: true,
      statusText: "Open Now • Closes 3:00 AM",
      badgeLabel: "Open Now",
      hoursDetail: "Dine-in, Takeaway & Delivery",
    };
  }
}
