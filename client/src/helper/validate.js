import toast from "react-hot-toast"; // ایمپورت کتابخانه toast برای نمایش پیام‌های خطا

// validate login username // تابع برای اعتبارسنجی نام کاربری هنگام ورود
export async function usernameValidate(values) {
  const errors = usernameVerify({}, values); // اجرای تابع اعتبارسنجی و ذخیره خطاها در errors
  return errors; // برگرداندن لیست خطاها
}

// validate username // تابع برای بررسی مقدار نام کاربری
function usernameVerify(error = {}, values) {
  if (!values.username) {
    // اگر مقدار نام کاربری خالی باشد
    error.username = toast.error("Username Required ...!"); // نمایش پیام خطا
  } else if (values.username.includes(" ")) {
    // اگر نام کاربری شامل فضای خالی باشد (این شرط اشتباه است و همیشه false خواهد بود)
    error.username = toast.error("Invalid Username...!"); // نمایش پیام خطا برای نام کاربری نامعتبر
  }
  return error; // برگرداندن لیست خطاها
}

// ✅ ورودی:

// error: یک آبجکت خالی که خطاها را در آن ذخیره می‌کنیم.
// values: مقادیری که کاربر در فرم وارد کرده است.

// ✅ خروجی:

// اگر نام کاربری معتبر باشد، آبجکت خالی برمی‌گرداند.
// اگر نام کاربری معتبر نباشد، یک پیام خطا در toast نمایش می‌دهد و خطا را در error ذخیره می‌کند.
