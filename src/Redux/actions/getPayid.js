import { getPayId } from "./actionTypes";

export const getPay = (
  pay_id,
  trans_id,
  course_id,
  course_name,
  course_description,
  course_photo
) => {
  return {
    type: getPayId.GET_PAY_ID,
    payload: {
      pay_id,
      trans_id,
      course_id,
      course_name,
      course_description,
      course_photo,
    },
  };
};

export const removePay = (removed) => {
  return {
    type: getPayId.REMOVE_PAY_ID,
    payload: removed,
  };
};
