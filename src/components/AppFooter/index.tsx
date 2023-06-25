import { Typography } from "antd";

function AppFooter() {
  return (
    <div className="AppFooter">
      <Typography.Link href="tel:+1234567890">+959 783 731 528</Typography.Link>
      <Typography.Link href="https://ww.google.com" target="_blank">
        Privacy Policy
      </Typography.Link>
      <Typography.Link href="https://ww.google.com" target="_blank">
        Terms of Use
      </Typography.Link>
    </div>
  );
}

export default AppFooter;
