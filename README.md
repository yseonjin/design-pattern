# design-pattern
디자인패턴 연습페이지

1. Strategy Pattern
전략 패턴 또는 정책 패턴은 실행 중에 알고리즘을 선택할 수 있게 하는 행위 소프트웨어 디자인 패턴
알고리즘군을 정의하지 않고 각각 캡슐화하여 교환해서 사용할 수 있도록 만든다.
알고리즘을 사용하는 클라이언트와는 독립적으로 알고리즘 변경이 가능하다.
** 교환!
==> 또 다른 예시보기
```
// interface EatBehavior {
//
// }
interface Strategy {
    login : () => void;
    logout: () => void;
}
interface Auth {
    // eatBehavior: EatBehavior;
    strategy: Strategy;
    login: () => void;
    logout: () => void;
}


class Passport implements Auth {
    // eatBehavior: EatBehavior;
    strategy: Strategy;

    constructor ( strategy: Strategy) {
        // this.eatBehavior = eatBehavior;
        this.strategy = strategy;
    }
    login() {
        this.strategy.login();
    }

    logout() {
        this.strategy.logout();
    }
}

class FacebookLogin implements Strategy {
    login(): void {
        this.a();
        this.b();
    }
    logout() {

    }
    private a(){

    } 
    private b() {}

}

class KaKaoLogin implements Strategy {
    login(): void {
        this.c();
        this.d();
    }
    logout() {

    }
    private c() {}
    private d() {}
}

const facebook: Passport =  new Passport(new FacebookLogin());
const kakao: Passport = new Passport(new KaKaoLogin());

facebook.login()
kakao.login();
```
