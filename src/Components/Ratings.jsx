import React from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import Button from "./Button";
import { useFormik } from "formik";
import { number, object, string } from "yup";

const Ratings = () => {
  const formik = useFormik({
    initialValues: {
      rating: "",
      feedback: "",
    },
    validationSchema: object({
      rating: number().required("Please enter a rating"),
      feedback: string().required("Please enter a feedback"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <div className=" border p-5 shadow rounded-lg ">
        <form
          encType="multipart/form-data"
          className=" max-w-2xl mx-auto w-full "
          onSubmit={formik.handleSubmit}
        >
          <Input
            title="Your Rating"
            type="number"
            formik={formik}
            id="rating"
            name="rating"
            value={formik.values.rating}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Your Rating"
          />

          <TextArea
            title="Your Feedback"
            formik={formik}
            placeholder={"Your description...."}
            name="feedback"
            id="feedback"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            rows={10}
            value={formik.values.feedback}
            cols={100}
          />
          <Button type="submit" className=" mt-5 bg-pink-500 hover:bg-pink-600">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Ratings;
