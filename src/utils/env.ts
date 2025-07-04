export function getVmindRequestServer() {
  return process.env.VIMD_IMAGE_SERVER || "https://vmind.visactor.com/export";
}
