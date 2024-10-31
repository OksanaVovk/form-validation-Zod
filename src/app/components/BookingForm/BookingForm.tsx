"use client"
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { createBookingSchema, BookingFormData } from "@/app/schemas/bookingSchema";
import ErrorMessage from '../ErrorMessage';
import styles from "./BookingForm.module.css";



export default function BookingForm() {
  const[timeSlotList, setTimeSlotList]=useState<string[]>([])
    const { register, handleSubmit, formState: { errors } } = useForm<BookingFormData>({resolver: zodResolver(createBookingSchema(timeSlotList)),
   });
   
  useEffect(() => {
    fetch("/api/time-slots")
  .then(response => response.json())
    .then(data => {
      setTimeSlotList(data);
    })
  .catch(error => {
    console.log(error);
    });

   
  }, []);


  const onSubmit = async (data) => {
    alert("Booking successful!")
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputGroup}>
        <label htmlFor="bookerName" className={styles.label}>
          Booker Name
        </label>
        <input id="bookerName" className={styles.input} {...register('bookerName')} />
         <ErrorMessage message={errors.bookerName?.message} />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="bookerEmail" className={styles.label}>
          Booker Email
        </label>
        <input id="bookerEmail" className={styles.input}  {...register('bookerEmail', {required:false})}  />
         <ErrorMessage message={errors.bookerEmail?.message} />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="eventName" className={styles.label}>
          Event Name
        </label>
        <input id="eventName" className={styles.input} {...register('eventName')}  />
         <ErrorMessage message={errors.eventName?.message} />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="eventDate" className={styles.label}>
          Event Date
        </label>
        <input id="eventDate" className={styles.input} type="date"  {...register('eventDate', { valueAsDate: true } )} />
         <ErrorMessage message={errors.eventDate?.message} />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="numberOfGuests" className={styles.label}>
          Number of Guests
        </label>
        <input id="numberOfGuests" type="number" className={styles.input} {...register('numberOfGuests',  {setValueAs: (v) => v === "" ? undefined : parseInt(v, 10),})} />
         <ErrorMessage message={errors.numberOfGuests?.message} />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="timeSlot" className={styles.label}>
          Time Slot
        </label>
        <select id="timeSlot" className={styles.input} {...register('timeSlot')} >
          <option value="">Select a time slot</option>
          {timeSlotList.length > 0 ? timeSlotList.map((l, index) => { return <option key={index} value={l}>{l}</option> }):null}
        </select>
         <ErrorMessage message={errors.timeSlot?.message} />
      </div>

      <div className={styles.inputGroup}>
        <label htmlFor="eventLink" className={styles.label}>
          Event Link (Online)
        </label>
        <input
          id="eventLink"
          className={styles.input}
          type="url"
          {...register('eventLink')}
        />
         <ErrorMessage message={errors.eventLink?.message} />
      </div>

      <button className={styles.button} type="submit">
        Book Event
      </button>
    </form>
  );
}
