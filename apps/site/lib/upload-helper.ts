export async function uploadFile(file: File) {
  // TODO: Implement your file upload logic here
  // This could be to S3, Cloudinary, or your own server
  // For now, we'll return a mock URL
  return `https://storage.example.com/${file.name}`;
}

export async function uploadFiles(formData: any) {
  const uploads = [];

  // List of fields that contain files
  const fileFields = [
    "panCard",
    "gstCertificate",
    "fssaiLicense",
    "cancelledCheque",
    "brandLogo",
    "brandCertificate",
  ];

  // Upload each file and get its URL
  for (const field of fileFields) {
    if (formData[field] instanceof File) {
      const url = await uploadFile(formData[field]);
      uploads.push({ field, url });
    }
  }

  // Replace file objects with URLs in the form data
  const processedData = { ...formData };
  uploads.forEach(({ field, url }) => {
    processedData[field] = url;
  });

  return processedData;
}
