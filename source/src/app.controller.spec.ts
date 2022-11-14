import { Test, TestingModule } from "@nestjs/testing";
import { rejects } from "assert";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

describe("AppController", () => {
  let appController: AppController;
  const mockAppService = {
    create: jest.fn((dto) => {
      return {
        id: Date.now(),
        // ...dto
      };
    }),
    getName: jest.fn((dto) => {
      return {
        name: "Hi",
      };
    }),
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    })
      .overrideProvider(AppService)
      .useValue(mockAppService)
      .compile();

    appController = app.get<AppController>(AppController);
  });
  // mocking practices 1
  const mockFn = jest.fn(() => true);
  mockFn();

  const mockMyFn = {
    mockFntoBeFalse: jest.fn(() => false),
    mockGetName: jest.fn(() => {
      return "Rasikh";
    }),
    mockGetName1: jest.fn().mockName("Rasikh"),
    mockFntoBeJson: jest.fn(() => {
      return { id: "100", name: "Rasikh", email: "kh.rasikh542@gmail.com" };
    }),
    mockFntoBeJSON1: jest.fn().getMockName(),
  };

  const testtwo = jest.fn(() => {
    return { id: "100", name: "Rasikh", email: "kh.rasikh542@gmail.com" };
  });

  describe("tests for practice purposes only focusing on Mocking Functions.", () => {
    it("should return TRUE", () => {
      expect(mockFn).toHaveBeenCalled();
      expect(mockFn()).toBe(true);
    });

    it("should return FALSE", () => {
      expect(mockMyFn.mockFntoBeFalse()).toBe(false);
    });

    it("should test MockName", () => {
      expect(mockMyFn.mockGetName()).toEqual("Rasikh");
    });
  });

  //mocking function practices 2
  const video = {
    play() {
      return true;
    },
  };
  describe("Jest Object focusing on SpyOn method", () => {
    it("should return true", () => {
      const spy = jest.spyOn(video, "play")
      const isPlaying = video.play();
      expect(spy).toHaveBeenCalled();
      expect(isPlaying).toBe(true);
    });

    it("should return result of two numbers using mockImplementation", () => {
      const mockImpFnA = jest.fn().mockImplementation(() => 100); //or {return 100}
      const mockImpFnB = jest.fn().mockImplementation((n) => n + 2);
      const mockImpFnC = jest.fn().mockImplementation((a, b) => a * b);
      expect(mockImpFnA()).toBe(100);
      expect(mockImpFnB(2)).toBe(2 + 2);
      expect(mockImpFnC(12, 14)).toBe(12 * 14);
    });
  });

  describe("jest should return 200, 500, and 400",  () => {
    it("should return 500",  () => {
      const asyncMock = jest
        .fn()
        .mockResolvedValueOnce("first call")
        // .mockRejectedValueOnce(new Error("Async error message"));
       asyncMock(); // 'first call'
       asyncMock(); // throws 'Async error message'
    });
  });
});
