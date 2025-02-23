export function useCountDown(date) {
  const x = setInterval(() => {
    const countDownDate = date.getTime();
    const now = new Date().getTime();

    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    console.log("date", {
      days,
      hours,
      minutes,
      seconds,
    });

    if (distance < 0) {
      clearInterval(x);
    }

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }, 1000);
}
