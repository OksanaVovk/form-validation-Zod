# The tasks of the topic Form validation with Zod and React Hook Form:

## Schema Development Assignment

## Objective

You are required to create a validation schema using **Zod** in _src/app/schemas/bookingSchema.ts_ that validates a form submission for an event booking system.  
The schema must enforce specific validation rules, ensuring that the input data adheres to the given criteria.

## Requirements

The form contains the following fields that need to be validated:

### 1. **Booker Name**

- **Type**: `string`
- **Validation Rules**:
  - Must be at least 2 characters long.
- **Error Message**: `"Booker name must be at least 2 characters long"`

### 2. **Booker Email**

- **Type**: `string`
- **Validation Rules**:
  - Must be a valid email address format.
- **Error Message**: `"Invalid email address"`

### 3. **Event Name**

- **Type**: `string`
- **Validation Rules**:
  - Must be at least 2 characters long.
- **Error Message**: `"Event name must be at least 2 characters long"`

### 4. **Event Date**

- **Type**: `Date`
- **Validation Rules**:
  - The selected date must be in the future.
- **Error Message**: `"Event date must be in the future"`

### 5. **Number of Guests**

- **Type**: `number`
- **Validation Rules**:
  - Must be an integer.
  - Must be between 1 and 10 (inclusive).
- **Error Messages**:
  - `"Number of Guests must be integer"`
  - `"Number of Guests must be at least 1"`
  - `"Number of Guests must be at most 10"`

### 6. **Time Slot**

- **Type**: `string`
- **Validation Rules**:
  - Must match one of the available time slots provided by the backend.
- **Error Message**: `"Selected time slot is unavailable"`

### 7. **Event Link**

- **Type**: `string`
- **Validation Rules**:
  - Must be a valid URL format.
- **Error Message**: `"Invalid URL. Please enter a valid event link"`

## Additional Information

- **Available Time Slots**: The time slots available for booking will be provided as an array of strings. The schema should dynamically check that the chosen time slot is one of the available options.
- **Optional Fields**:
  - All fields listed above are **required**, except for the `numberOfGuests`, which can be omitted if desired.

<br><br>

## BookingForm Component Development Assignment

## Objective

You are required to develop a **BookingForm** component using **React Hook Form** and validate it using the provided schema.  
The form will capture booking information for an online event, and it should integrate seamlessly with the schema for validation.  
If all the data is valid, on submit form alert with text "Booking successful!" should be shown.  

## Requirements

### 1. **Form Fields**

The form contains the following fields:

- **Booker Name** (Text input)
- **Booker Email** (Email input)
- **Event Name** (Text input)
- **Event Date** (Date input)
- **Number of Guests** (Number input)
- **Time Slot** (Select dropdown)
- **Event Link** (URL input)

The component should make a request to _/api/time-slots_ to receive available time slots
Ensure all form fields are properly registered with **React Hook Form**'s `register` method.  
Use @hookform/resolvers package to connect zod schema with react-hook-form

### 2. **Validation Integration**

- The form must use the provided **Zod** schema for validation.
- Validation should occur when the user submits the form.
- If the form has validation errors, appropriate error messages should be displayed below each field.

### 3. **Error Handling**

- Use a custom **ErrorMessage** component to display error messages for each form field.
- Each error message should be linked to its respective input field.

Example:

```tsx
<ErrorMessage message={errors.bookerName?.message} />
```

<br><br>

## ErrorMessage Component Development Assignment

## Objective

You are required to develop an **ErrorMessage** component in _\src\app\components\ErrorMessage\ErrorMessage.tsx_.  
The component will be used to display form validation error messages beneath the respective form fields.

## Requirements

### 1. **Props**

The **ErrorMessage** component should accept the following prop:

- **message** (`string | undefined`): The validation error message to display.
  - If the message is `undefined`, nothing should be rendered.
  - If a message is provided, it should be rendered inside a `<p>` or `<span>` tag.

### 2. **Conditional Rendering**

- The component should only render if a validation error message is passed in.
- If no message is provided, the component should not output any HTML.

### 3. **Styling**

- Use _src\app\components\ErrorMessage\ErrorMessage.module.css_ for styling this component.
