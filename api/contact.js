export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const { fullname, email, phone, message } = req.body;

    const formData = new FormData();
    formData.append("fullname", fullname);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("message", message);

    const response = await fetch("https://whitebricks.com/tsacademy.php", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      return res.status(response.status).json({
        success: false,
        error: "External API failed",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Form submitted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Failed to submit form",
    });
  }
}
