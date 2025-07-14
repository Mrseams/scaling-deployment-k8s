import http from 'k6/http';
import { check } from 'k6';

export const options = {
  vus: 1000, // Number of virtual users
  iterations: 1000000, // Total requests (1 million)
};

export default function () {
  const res = http.get('<YOUR BACKEND_IP>',{ headers: { "User-Agent": "k6" }});

  check(res, {
    'status is 200': (r) => r.status === 200,
  });
}