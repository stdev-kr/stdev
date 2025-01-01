import { Button } from '@nextui-org/button'
import dayjs from 'dayjs'

export default async function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">STDev</h3>
            <p className="text-sm">
              주소: 대전광역시 서구 월평로 65, 802호 (월평동, 용원빌딩)
            </p>
            <p className="text-sm">전화: 02-1234-5678</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">빠른 링크</h3>
            <ul className="text-sm">
              <li>
                <a href="#" className="hover:underline">
                  개인정보처리방침
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  이용약관
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  사이트맵
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-bold mb-2">뉴스레터 구독</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="이메일 주소"
                className="mr-2 px-3 py-2 border rounded"
              />
              <Button>구독</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          © {dayjs().year()} STDev Nonprofit Corporation. All rights reserved.
        </div>
      </div>
    </footer>
  )
}