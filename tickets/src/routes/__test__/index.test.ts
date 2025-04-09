import request from "supertest";
import { app } from "../../app";

it("Returns the list of tickets", async () => {
  await request(app).post("/api/tickets").set("Cookie", global.signin()).send({
    title: "IPL RCB vs CSK",
    price: 30,
  });

  await request(app).post("/api/tickets").set("Cookie", global.signin()).send({
    title: "IPL CSK vs RCB",
    price: 50,
  });

  const response = await request(app).get("/api/tickets").send().expect(200);

  expect(response.body.length).toEqual(2);
});
