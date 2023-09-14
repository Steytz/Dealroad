export const handleUrlValidation = (urlString: string) => {
  const protocol = "^(https?:\\/\\/)?"
  const domainNameAndExtension = "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|"
  const ipv4Address = "((\\d{1,3}\\.){3}\\d{1,3}))"
  const portAndPath = "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*"
  const queryString = "(\\?[;&a-z\\d%_.~+=-]*)?"
  const fragmentLocator = "(\\#[-a-z\\d_]*)?$"
  const urlPattern = new RegExp(`${protocol}${domainNameAndExtension}${ipv4Address}${portAndPath}${queryString}${fragmentLocator}`, "i")
  const test = urlPattern.test(urlString)
  return test
}
