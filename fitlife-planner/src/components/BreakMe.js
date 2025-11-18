function BreakMe() {
  throw new Error("This component crashed intentionally!");
  return <div>You will never see this.</div>;
}
export default BreakMe;