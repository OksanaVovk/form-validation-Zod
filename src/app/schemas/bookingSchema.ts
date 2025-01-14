import { array, string, z } from "zod";


export const bookingSchema = z.object({
    bookerName: z.string().min(2,{ message: "Booker name must be at least 2 characters long"}),
    bookerEmail: z.string().optional().refine(val => val === '' || z.string().email().safeParse(val).success, {message: "Invalid email address"}),
    eventName: z.string().min(2,{ message: "Event name must be at least 2 characters long"}),
    eventDate: z.date().min(new Date(), {message:"Event date must be in the future"}),
    numberOfGuests: z.number({required_error: "Number of Guests must be integer"}).int({message:"Number of Guests must be integer"}).min(1, {message: "Number of Guests must be at least 1"}).max(10, {message:"Number must be less than or equal to 10"}),
    timeSlot: z.string(),
    eventLink: z.string().url({message:"Invalid URL. Please enter a valid event link"}),
});



export const createBookingSchema = (availableTimeSlots: string[]) => 
  bookingSchema.extend({
    timeSlot: z.string().refine(val => availableTimeSlots.includes(val), {
      message: "Selected time slot is unavailable"
    }),
  });

export type BookingFormData = z.infer<typeof bookingSchema>& {
  timeSlot: string;
};

