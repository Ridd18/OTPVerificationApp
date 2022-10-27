import MojoAuth from "mojoauth-web-sdk";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmailSignUp = () => {
  const navigate = useNavigate();
  const [payload, setPayload] = React.useState(null);

  const [error, setError] = useState("");

  React.useEffect(() => {
    const mojoauth = new MojoAuth("test-753c737a-3ff0-4998-971c-7cf0ea48c738", {
      language: "en",
      //   redirect_url: "http://localhost:3000/home",

      source: [{ type: "email", feature: "otp" }],
    });
    mojoauth.signIn().then(async (payload) => {
      setPayload(payload);
      try {
        navigate("/home");
      } catch (err) {
        setError(err.message);
      }

      //   document.getElementById("mojoauth-passwordless-form").remove();
    });
  }, [payload]);

  return (
    <>
      {/* <div id="mojoauth-passwordless-form"></div> */}
      <body>
        <div id="root">
          <div class="container">
            <div class="row">
              <div class="col">
                <div id="mojoauth-passwordless-form">
                  <div id="mojoauth-login-container">
                    <div class="mj-main-js mj-wrapper">
                      <div
                        id="mojoauth-login-card"
                        class="mj-card-js padding-lg-js"
                      >
                        <div class="header">
                          <div class="title">
                            <h1>Email Auth</h1>
                          </div>
                          <div class="subtitle" id="mojoauth-subtitle"></div>
                        </div>
                        <form class="form" id="mojoauth-login">
                          <div class="input-control">
                            <label for="">Email</label>
                            <input
                              type="email"
                              required=""
                              name="email"
                              id="mojoauth-passwordless-email"
                              placeholder="Enter Your Email Address"
                            />
                          </div>
                          <div class="input-control">
                            <input
                              type="submit"
                              id="mojoauth-signin-button"
                              class="btn btn-primary"
                              value="Sign in"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <script src="/static/js/bundle.js"></script>
        <script src="/static/js/vendors~main.chunk.js"></script>
        <script src="/static/js/main.chunk.js"></script>
      </body>
      <pre>{JSON.stringify(payload, null, 4)}</pre>
    </>
  );
};

export default EmailSignUp;
