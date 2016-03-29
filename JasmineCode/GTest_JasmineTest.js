/**
 * Created by Guibs on 2016/3/28.
 */
describe(
    "GTest测试---Pass 1---",function () {
        it("Pass 1 Should Return GTest1", function () {
            expect("GTest1").toEqual(GTest(1));
        });
    }
);
describe(
    "GTest测试---Pass 2---",function () {
        it("Pass 2 Should Return GTest1", function () {
            expect("GTest2").toEqual(GTest(2));
        });
    }
);
describe(
    "GTest测试---Pass 3...n---",function () {
        it("Pass 3...n Should Return GTestN", function () {
            expect("GTestN").toEqual(GTest(3));
        });
    }
);