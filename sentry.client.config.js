import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://79553401af43a429ab7339a54470acdf@o4509195243814912.ingest.us.sentry.io/4509195247943680",
  integrations: [
    Sentry.feedbackIntegration({
      
      colorScheme: "dark",
    }),
  ],
});