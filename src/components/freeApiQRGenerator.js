import axios from "axios";

const generateQR = async (inputText, inputSize, inputType) => {
  try {
    const response = await axios.get(
      `https://api.qrserver.com/v1/create-qr-code/?size=${inputSize}&data=${inputText}`
    );

    return response;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const outputResponse = await generateQR(
  "https://www.youtube.com",
  "150x150",
  "png"
);
console.log(outputResponse);
