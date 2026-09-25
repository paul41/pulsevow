import cors, {
  type CorsOptions,
} from "cors";

const allowedOrigins = [
  "http://localhost:5173",
  "https://pulsevow.com",
  "https://www.pulsevow.com",
];

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin) {
      callback(null, true);
      return;
    }

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
      return;
    }

    callback(
      new Error(`CORS: Origin ${origin} is not allowed`),
    );
  },

  credentials: true,

  methods: [
    "GET",
    "POST",
    "PUT",
    "PATCH",
    "DELETE",
    "OPTIONS",
  ],

  allowedHeaders: [
    "Content-Type",
    "Authorization",
  ],
};

export default cors(corsOptions);