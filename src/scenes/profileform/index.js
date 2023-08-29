import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
/*可以使用 Formik 类来创建和管理表单。如果你需要在 React 应用中使用表单，
特别是涉及到复杂逻辑和状态管理的情况下表单验证,表单提交,状态管理 */
import * as yup from "yup";/*name age email */
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
/*isNonMobile 变量用于判断当前是否是在移动设备上。具体来说，它用于检查屏幕的宽度是否大于等于 600 像素，
如果是的话，就意味着当前不是在移动设备上，而是在非移动设备（例如台式机、笔记本电脑等）上。 */
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
              /*

            gridTemplateColumns="repeat(4, minmax(0, 1fr))"：这是用于定义网格容器中列的宽度的属性。
            在这里，它使用了 repeat() 函数来创建4个列，每列的宽度由 minmax(0, 1fr) 决定。minmax(0, 1fr)
             的意思是列的宽度会在最小值和最大值之间动态调整，以适应容器的可用空间。

              如果总共有4列，并且它们的宽度分别是 1fr、3fr、4fr 和 5fr，那么它们将会如何分布呢？

首先，我们可以把可用空间看作一个整体。这里的 fr 单位会根据各自的权重来分配这个空间。

1fr：占据的空间将是整体空间的 1/13。
3fr：占据的空间将是整体空间的 3/13。
4fr：占据的空间将是整体空间的 4/13。
5fr：占据的空间将是整体空间的 5/13。
总共这四列的分数之和是 1 + 3 + 4 + 5 = 13，而各自的占比是按照它们的权重来分配的。这样的分配方式会确保它们占据可用空间的比例是相对的，而不是绝对的像像素一样。

这种方式使得网格布局在不同的屏幕尺寸下能够很好地适应，比如在大屏幕上更多地分配空间给更大的 5fr 列，而在小屏幕上更多地分配空间给较小的列，以达到更好的平衡和布局效果。
              & > div：这是选择器，表示选择所有直接子元素为 div 的元素
              { gridColumn: isNonMobile ? undefined : "span 4" }：这是一个样式对象，用于根据条件来设置网格子元素的列。
              如果 isNonMobile 为 true，则表示在非移动设备上，不对列进行特殊设置，保持默认的列宽度。
              如果 isNonMobile 为 false，则表示在移动设备上，将子元素的列设置为横跨4列 */
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                /* true = true 时，我们是在比较两个相同的布尔值，因此结果是 true。而 !!true 则是将 true 这个值进行双重逻辑非运算，这种操作的目的是将一个值转换成布尔类型。

想象一下你有一个开关，开表示 true，关表示 false。当你对开关应用两次开关操作（开->关->开），你最终的状态还是开。同样地，当你对 true 进行两次逻辑非操作（!true -> false，再次操作 !false -> true），你最终得到的结果还是 true。

所以，!!true 之所以等于 true，是因为双重逻辑非操作相当于没有进行任何变化，只是将 true 转换成布尔类型而已。这个操作通常用于确保值是布尔类型，而不是其他数据类型。就像是看似多余地打开一个已经是开着的开关，但它确保了开关的状态是明确的。
可以把双感叹号 !! 想象成确认一个“开关”是否打开（true）或关闭（false）的方式。就像当你想要确保一个实际的开关处于某个位置时，你可能会检查两次，以确保万无一失。

*/
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

export default Form;
