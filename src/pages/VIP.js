import { React, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export function VIP() {

  const navigate = useNavigate();

  const checkCookie = (session) => {
    if (!session) {
      navigate('/')
    }
  }

  useEffect(() => {
    const session = Cookies.get("Session_Event");

    checkCookie(session);
  });
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap place-items-center">
        <div
          className="m-9 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 mx-8"
        >
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://static.vecteezy.com/system/resources/previews/007/978/653/original/coca-cola-popular-drink-brand-logo-vinnytsia-ukraine-may-16-202-free-vector.jpg"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              Drink refill
            </h5>
            <p class="mb-3 font-normal text-gray-700 ">
              You're garantee with free Coca Cola or any other type of drink refill until the end of the event.
            </p>
          </div>
        </div>
        <div
          class="m-9 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100"
        >
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://img.freepik.com/vector-premium/trono-dorado-terciopelo-rojo_124715-209.jpg?w=2000"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              VIP attention
            </h5>
            <p class="mb-3 font-normal text-gray-700 ">
              Our personal around the event will help you with anything you want if you're VIP.
            </p>
          </div>
        </div>

        <div
          class="m-9 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 mx-8"
        >
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://talent-match.es/wp-content/uploads/2020/10/talent-match-logo-corp-1-1.png"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              Talent Match
            </h5>
            <p class="mb-3 font-normal text-gray-700 ">
              This is an event of dating, you can get couple here, you can start searching for any type of love of pair you want.
            </p>
          </div>
        </div>
        <div
          class=" m-9 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100"
        >
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/10/8/2/FNM_110115-Classic-Roast-Turkey-and-Gravy-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1444416993269.jpeg"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              VIP food
            </h5>
            <p class="mb-3 font-normal text-gray-700 ">
              There's a special section for food made by our five-stars chefs and it'll be yours with your VIP membership.
            </p>
          </div>
        </div>
      </div>
    </>
  );

}
