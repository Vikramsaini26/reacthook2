import React from "react";
import { useForm } from "react-hook-form";
const Reactform = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const onSubmit = (data) => console.log(data);
  console.log("errors", errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="text"
          id="fullname"
          className="form-field"
          placeholder="Full Name"
          {...register("fullname", {
            required: "required",
            maxLength: {
              value: 10,
              message: "Limit Exceeded",
            },
          })}
        />

        {errors.fullname && (
          <small style={{ color: "red" }}>{errors.fullname.message}</small>
        )}
      </div>
      <div>
        <input
          type="email"
          id="email"
          className="form-field"
          placeholder="Email"
          {...register("email", {
            required: "required",
          })}
        />
        {errors.email && (
          <small style={{ color: "red" }}>{errors.email.message}</small>
        )}
      </div>
      <div>
        <input
          type="phone"
          id="phone"
          className="form-field"
          placeholder="Phone"
          {...register("phone", {
            required: "required",
            maxLength: {
              value: 10,
              message: "Limit Exceeded",
            },
          })}
        />
        {errors.phone && (
          <small style={{ color: "red" }}>{errors.phone.message}</small>
        )}
      </div>
      <div>
        <input
          type="password"
          id="password"
          className="form-field"
          placeholder="Password"
          {...register("password", {
            required: "required",
            maxLength: {
              value: 6,
              message: "Limit Exceeded",
            },
          })}
        />
        {errors.password && (
          <small style={{ color: "red" }}>{errors.password.message}</small>
        )}
      </div>
      <div>
        <input type="checkbox" value="Agree" {...register("Yes")} />
        <label>Yes</label>
      </div>
      <div>
        <input type="checkbox" value="disagree" {...register("No")} />
        <label>No</label>
      </div>
      <select className="form-field" {...register("state")}>
        <option selected>Select your state</option>
        <option value="Delhi">Delhi</option>
        <option value="Punjab">Punjab</option>
        <option value="Jharkhand">Jharkhand</option>
        <option value="Bihar">Bihar</option>
      </select>
      <br />
      <button type="submit" className="form-field">
        Submit
      </button>
    </form>
  );
};

export default Reactform;
