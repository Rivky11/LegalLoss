import { Helmet } from "react-helmet";
import { Button, Img, Input, Heading, Text } from "../../components";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";

export default function SignInDealerPage() {
  const [formData, setFormData] = useState({ fullName: "", phone: "" });
  const [errors, setErrors] = useState({ fullName: "", phone: "" });
  const [isOtpVisible, setIsOtpVisible] = useState(false);
  const [otp, setOtp1] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // שדה לשגיאה

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error when user starts typing
  };

  const validatePhone = (phone) => {
    const phoneRegex =
      /^((\+972|972)|0)5([0|1|2|3|4|5|6|8|9])( |-)?([0-9]{7})$/;
    return phoneRegex.test(phone);
  };

   // Detect when OTP is fully entered
   useEffect(() => {
    if (otp.length === 6) {
      console.log("OTP entered:", otp);
      sendOtpToServer(otp);
    }
  }, [otp]);

  // Function to send OTP to server
  const sendOtpToServer = async(otpValue) => {
   
    // Make API request here
    const form = new FormData();
    form.append("name", formData.fullName.trim());
    form.append("phone", formData.phone.trim());
    form.append("otp", otp);
    form.append("session_id", sessionId);

    const response = await fetch(process.env.REACT_APP_API_URL + "otp/verifyOtp", {
      method: "POST",
      //headers: { "Content-Type": "application/json" },
      body: form, //JSON.stringify({ phone: formData.phone, otp: otp, session_id: sessionId }),
    });

    console.log("otp ver", response);

    const data = await response.json();

    let verifyErrors = {};
    
    /*if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    } */

    if (data.success) {
      setErrorMessage(""); // מחיקת שגיאות קודמות אם היו
      alert("ההרשמה בוצעה בהצלחה!");

    } else {
      
      //alert("קוד שגוי, נסי שוב");
      setErrorMessage("קוד שגוי, נסו שוב");     
     
    } 

  };


  const handleSendOTP = async () => {
    
    let newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "שם מלא הוא שדה חובה";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "נייד הוא שדה חובה";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "נייד לא תקין";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const form = new FormData();
    form.append("name", formData.fullName.trim());
    form.append("phone", formData.phone.trim());

    const response = await fetch(process.env.REACT_APP_API_URL + "otp/sendOtp", {
      method: "POST",
      //headers: { "Content-Type": "application/json" },
      body: form, //JSON.stringify({"name": formData.fullName.trim(), "phone": formData.phone.trim()}),
    });

    //console.log("Response status:", response);

    const data = await response.json();
    console.log("##", data);

    if (data.success) {
      setOtpSent(true);
      setSessionId(data.session_id); // מזהה ייחודי לתהליך
      setIsOtpVisible(true);
    } else {
      alert("שגיאה בשליחת ה-OTP");
    }

    
  };

  const handleVerifyOTP = async () => {  
    
    sendOtpToServer(otp);
    
  };

  return (
    <>
      <Helmet>
        <title>הרשמה למערכת</title>
        <meta name="description" content="הרשמה" />
      </Helmet>
      <div className="flex w-full items-start bg-secondary-primary_white md:flex-col">
        <div className="relative w-[58%] content-center self-center lg:h-auto md:h-auto md:w-full md:px-5">
          <div className="flex flex-1 items-start md:flex-col">
            <div className="relative w-[85%] content-center self-center lg:h-auto md:h-auto md:w-full">
              <Img
                src="images/signin-bg.png"
                alt="Imageone"
                className="w-full flex-1 object-cover signin-bg"
              />
              <div className="absolute left-0 right-0 top-[8%] mx-auto flex flex-1 flex-col items-start gap-1 pl-[142px] pr-14 lg:pl-8 md:px-5 sm:px-4">
                <Heading
                  size="heading15xl"
                  as="h1"
                  className="!font-montserrat text-[71.43px] font-extrabold !text-red-a700_01 lg:text-[48px] md:text-[48px]"
                ></Heading>
              </div>
            </div>
          </div>
        </div>
        <div className="signin-form flex w-[28%] flex-col gap-9 bg-secondary-primary_white py-7 md:w-full md:px-5 sm:py-4">
          {!isOtpVisible ? (
            <>
              <div className="flex flex-col items-center px-14 md:px-5 sm:px-4">
                <Heading
                  size="heading10xl"
                  as="h2"
                  className="!font-heebo text-[35px] font-bold tracking-[-0.70px] !text-red-a700_03 lg:text-[29px] md:text-[29px] sm:text-[27px]"
                >
                  הרשמה למערכת
                </Heading>
                <Heading
                  size="text3xl"
                  as="h3"
                  className="!font-heebo text-[20px] font-medium tracking-[-0.40px] lg:text-[17px]"
                >
                  אנא מלאו פרטיכם
                </Heading>
              </div>

              <div className="mx-[66px] mb-[34px] flex flex-col items-center gap-[46px] md:mx-0">
                <div className="flex flex-col gap-5 self-stretch">
                  <div className="flex flex-col items-end gap-0.5">
                    <Text
                      size="h4_assistant16px_r"
                      as="p"
                      className="mr-[18px] text-[16px] font-semibold lg:text-[13px] md:mr-0"
                    >
                      <span className="text-red-a700_03">*</span>
                      <span className="text-black-900_03">שם מלא</span>                      
                    </Text>
                    <Input
                      size="sm"
                      name="fullName"
                      placeholder="רשמו פה את שמכם המלא"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`self-stretch rounded-[16px] border px-3 ${
                        errors.fullName ? "border-red-500" : ""
                      }`}
                    />
                    {errors.fullName && (
                      <Text className="text-red-500">{errors.fullName}</Text>
                    )}
                  </div>
                  <div className="flex flex-col items-end gap-0.5">
                    <Heading
                      size="h4_assistant_16px_b"
                      as="h2"
                      className="mr-[18px] text-[16px] font-semibold lg:text-[13px] md:mr-0"
                    >
                      <span className="text-red-a700_03">*</span>
                      <span className="text-black-900_03">נייד</span>                      
                    </Heading>
                    <Input
                      size="sm"
                      type="text"
                      name="phone"
                      placeholder="רשמו פה את מספר הנייד"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`self-stretch rounded-[16px] border px-3 ${
                        errors.phone ? "border-red-500" : ""
                      }`}
                    />
                    {errors.phone && (
                      <Text className="text-red-500">{errors.phone}</Text>
                    )}
                  </div>
                </div>
                <div className="flex w-[24%] justify-center lg:w-full md:w-full">
                  <div className="w-full">
                    <Button
                      onClick={handleSendOTP}
                      leftIcon={
                        <div className="flex h-[10px] w-[6px] items-center justify-center">
                          <Img
                            src="images/img_arrowleft.svg"
                            alt="Arrow Left"
                            className="mb-1.5 mt-0.5 h-[10px] w-[6px] object-contain"
                          />
                        </div>
                      }
                      className="h-[40px] w-full gap-2 black-over rounded-[20px] bg-red-800 px-2.5 text-[16px] font-semibold text-secondary-primary_white lg:text-[13px]"
                    >
                      קבל קוד
                    </Button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col items-center self-stretch px-14 md:px-5 sm:px-4">
                <Heading
                  size="heading10xl"
                  as="h2"
                  className="!font-heebo text-[35px] font-bold tracking-[-0.70px] !text-red-a700_03 lg:text-[29px] md:text-[29px] sm:text-[27px]"
                >
                  קבלת SMS
                </Heading>
                <Heading
                  size="text3xl"
                  as="h3"
                  className="!font-heebo text-[20px] font-medium tracking-[-0.40px] lg:text-[17px]"
                >
                  אנא הזינו את הקוד{" "}
                </Heading>
              </div>
              <div className="mx-[100px] flex flex-col gap-9 self-stretch md:mx-0">
                <div>
                  <div className="mt-1 flex flex-col items-end gap-4">
                    <Text
                      size="h4_assistant16px_r"
                      as="p"
                      className="text-[16px] font-semibold lg:text-[13px]"
                    >
                      <span className="text-red-a700_03">*</span>
                      <span className="text-black-900_03">קוד</span>
                    </Text>
                    <OTPInput
                      value={otp}
                      onChange={setOtp1}
                      numInputs={6}
                      inputStyle="flex items-center justify-center cursor-text h-[50px] w-[50px] border-blue_gray-400 border border-solid text-center rounded-[3px]"
                      containerStyle="flex self-stretch w-auto pt-5 pb-2 gap-1.5 px-3"
                      renderInput={({ className, ...inputProps }, i) => (
                        <label
                          className="className flex h-[50px] w-[50px] cursor-text items-center justify-center rounded-[3px] border border-solid border-blue_gray-400 text-center"
                          key={i}
                        >
                          <input {...inputProps} />
                        </label>
                      )}
                    />
                  </div>
                </div>
                {errorMessage && <p className="align-center" style={{ color: 'red' }}>{errorMessage}</p>} {/* הצגת שגיאה */}             
                <Button
                  onClick={handleVerifyOTP}
                  leftIcon={
                    <div className="flex h-[10px] w-[6px] items-center justify-center">
                      <Img
                        src="images/img_arrowleft.svg"
                        alt="Arrow Left"
                        className="mb-1.5 mt-0.5 h-[10px] w-[6px] object-contain"
                      />
                    </div>
                  }
                  className="h-[40px] enter-btn black-over gap-2 rounded-[20px] bg-red-800 px-2.5 text-[16px] font-semibold text-secondary-primary_white lg:text-[13px]"
                >
                  כניסה לממשק סוחרים
                </Button>
                <Heading
                  size="textmd"
                  onClick={handleSendOTP}
                  as="a"
                  className="mb-3 align-center !font-heebo text-[14px] font-normal !text-gray-700_04"
                >
                  לא קיבלתי את הקוד שלחו שוב
                </Heading>
              </div>
              <div className="mx-[52px] flex w-[74%] lg:w-full md:mx-0 md:w-full colors-squares">
                <div className="h-[34px] w-[36px] bg-light_green-800" />
                <div className="ml-5 h-[34px] w-[36px] bg-yellow-800" />               
                <div className="ml-[26px] h-[34px] w-[36px] bg-red-a700_04" />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
