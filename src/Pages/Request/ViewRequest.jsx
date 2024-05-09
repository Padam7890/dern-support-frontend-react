import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import parse from "html-react-parser";
import { ToastContainer } from "react-toastify";
import { ClipLoader } from "react-spinners";

import http from "../../Utils/http";
import DetailPage from "../../Components/DeatailPage";
import { useFormik } from "formik";
import Input from "../../Components/Input";
import TextArea from "../../Components/TextArea";
import Button from "../../Components/Button";
import { number, object, string } from "yup";

const ViewRequest = () => {
  const { id } = useParams();
  const [request, setRequestDetails] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRequestDetails();
  }, []);

  const formik = useFormik({
    initialValues: {
      rating :'',
      feedback:''

    },
    validationSchema: object({
      rating: number()
       .required("Please enter a rating"),
      feedback: string()
       .required("Please enter a feedback"),

    }),
    onSubmit: (values) => {
      console.log(values);
     
    },
  });

  const getRequestDetails = async () => {
    try {
      setLoading(true);
      const res = await http.get(`/request/${id}`);
      const dataget = res.data.data;
      setRequestDetails(dataget);
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const converteddesc = request?.description && parse(request.description);

  return (
    <div className=" relative h-full">
      {loading && (
        <div className="bg-slate-800 bg-opacity-40 w-full h-full absolute z-30 top-0 left-0 flex justify-center items-center">
          <ClipLoader color={"#008000"} size={120} />
        </div>
      )}
      <div className=" flex flex-col justify-start  items-start gap-4 relative ">
        <ToastContainer />

        <div className=" flex gap-5 justify-start ">
          <DetailPage
            pageTitle="Request Details"
            pageDesc="Details about the Requests."
            detailItems={[
              {
                label: "Descrption",
                value: `${converteddesc?.props?.children}`,
              },
              { label: "Status", value: `${request?.status}` },
            ]}
          />

          {request && request.repairjob.length !== 0 && (
            <DetailPage
              pageTitle="Repair Details"
              pageDesc="Details about the Repair."
              detailItems={[
                {
                  label: "Support ID",
                  value: `${request?.repairjob[0].supportRequestId}`,
                },
                {
                  label: "Product Name",
                  value: `${request?.repairjob[0].productName}`,
                },
                {
                  label: "Scheduled Date",
                  value: `${new Date(request?.repairjob[0].scheduledDate)}`,
                },

                {
                  label: "Status",
                  value: `
                  ${request?.repairjob[0].status}
                  `,
                },
              ]}
            />
          )}
        </div>

        {request && request.status === "Submitted"  && (
          <div>
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
              <Button
                type="submit"
                className=" mt-5 bg-pink-500 hover:bg-pink-600"
              >
                Send
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewRequest;
