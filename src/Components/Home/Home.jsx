import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';
import man from "../../assets/man.png"
export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>

            <div className="hero bg-gray-500 relative">
                <div className="background text flex flex-col items-center">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>

                    <div className='flex flex-col justify-center pt-40'>
                        <p className='lg:text-5xl md:text-4xl text-3xl px-3 text-center hala'>
                            ندير عملياتك، نرتب بياناتك، ونزيد إنتاجيتك
                        </p>
                        <h1 className='text-center alexandria lg:text-5xl md:text-4xl text-3xl'>
                            ! بسهولة وكفاءة
                        </h1>
                    </div>

                    <div className="img flex justify-center absolute bottom-0 animate-fromBottom">
                        <img className='w-5/6' src={man} alt="" />
                    </div>
                </div>
            </div>



            <div className="fixed bottom-5 right-4 flex flex-col items-end">
                <div
                    className={`chat-container ${isOpen ? "open" : "closed"
                        } flex flex-col items-end transition-all duration-500`}
                >
                    <div
                        dir="rtl"
                        className="chat flex-1 pb-5 w-80 bg-white shadow-xl rounded-lg relative overflow-hidden"
                    >
                        <div className="bg-white border rounded flex items-center justify-center z-10">
                            <img
                                className="w-11 h-11 rounded-full ring-2 ring-white"
                                src="https://media.istockphoto.com/id/498529071/photo/arabian-business-man-working-on-laptop-at-his-office.jpg?s=612x612&w=0&k=20&c=Gp35R-tLgCMVP8D-bSDnulfEdWJRWlleqC7ThSruoUg="
                                alt=""
                            />
                            <p className="bg-gray-600 font-medium p-2 mt-8 ms-2 text-white kufi rounded-lg">
                                أهلا و سهلا , <span className="text-blue-300 kufi font-medium text-lg">محمد</span>
                            </p>
                        </div>
                        <div className="bg-blue-50 border border-t-0 rounded-t-none rounded-b flex flex-col space-y-2">
                            <div className="px-6 py-4 flex flex-col items-start gap-3">
                                <div className="font-semibold">أبدأ المحادثة معنا الان</div>
                                <div className="flex gap-11">
                                    <div className="flex flex-row -space-x-8">
                                        <img
                                            className="w-16 h-16 rounded-full border-2 border-white"
                                            src="https://media.istockphoto.com/id/1401473260/photo/late-20s-saudi-man-using-phone-in-desert.jpg?s=612x612&w=0&k=20&c=YMV91geDxGWw6vwyHKs86v-g3F02_lQPcPRHZuwdMdo="
                                            alt=""
                                        />
                                        <img
                                            className="w-16 h-16 rounded-full border-2 border-white"
                                            src="https://media.istockphoto.com/id/667834844/photo/dedication-and-technology-essential-for-getting-her-tasks-done.jpg?s=612x612&w=0&k=20&c=nhNrU--Fz-C5jQMmSV5LU_yra9AQ63nD72OLwK1txRo="
                                            alt=""
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <div className="text-gray-400">نشط منذ 10 دقائق</div>
                                        <div className="flex flex-row items-center gap-1 font-semibold">
                                            <svg
                                                className="w-4 h-4 text-blue-700"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                ></path>
                                            </svg>
                                            A few minutes
                                        </div>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    className="bg-blue-700 rounded-full text-white flex flex-row gap-2 py-3 px-5"
                                >
                                    ارسل لنا رسالة الأن
                                    <svg
                                        className="w-5 h-5 transform rotate-90"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="whatsapp text-center">
                            <p className="kufi my-2 font-medium">او تواصل معنا عبر الواتساب</p>
                            <button className="bg-green-500 p-2 px-4 rounded-xl text-white kufi font-semibold">
                                <i className="fa-brands fa-whatsapp"></i> ارسل الأن
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className="float-button bg-blue-400 rounded-full w-16 h-16 m-4 flex items-center justify-center cursor-pointer shadow-xl"
                    onClick={toggleChat}
                >
                    <svg
                        className={`w-6 h-6 text-white transform transition-transform duration-500 ${isOpen ? "rotate-180" : ""
                            }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </div>
            </div>
            <div className="second bg-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sequi, nisi voluptate incidunt quo veniam sint commodi ullam illum recusandae sit architecto, consectetur pariatur adipisci? Aperiam dolores rem impedit repellat corporis possimus reiciendis excepturi saepe cum totam quisquam sapiente aut iusto voluptatibus deleniti laudantium, mollitia dolorum. Sapiente at rerum assumenda incidunt eius iusto totam architecto ad? Reprehenderit consequatur suscipit optio non nemo nesciunt, minima dolore perferendis accusantium libero unde quo dolores dolor, tempore esse distinctio fuga velit exercitationem? Inventore quae veritatis quibusdam consequatur eligendi pariatur iusto iste quam animi, assumenda perspiciatis quas similique vel tempore esse maiores autem veniam excepturi voluptatem! Rerum alias, sint ipsum quibusdam nobis ut iusto ducimus et! Hic deserunt eligendi consectetur recusandae quia provident repudiandae beatae aliquam officiis cum? Eaque ea dicta cum aspernatur saepe non temporibus earum praesentium consequuntur unde magni quo perferendis id, inventore voluptate suscipit voluptas tenetur totam, molestiae quidem ipsum expedita itaque officia. Molestiae consectetur repellat aspernatur dolore animi neque odit ad nam blanditiis atque commodi, ab sapiente veniam mollitia et pariatur doloremque eum velit ipsam debitis ratione numquam fugit officia consequatur. Alias maxime similique aspernatur velit, ipsam animi doloribus accusamus, molestiae sint quibusdam aut temporibus neque laborum unde quo libero exercitationem cumque molestias, nesciunt culpa? Laborum dolores officia quas sit doloribus totam, ducimus tenetur quisquam facilis pariatur. Voluptates quia dolores beatae nemo, rem unde excepturi tempora tempore nesciunt labore explicabo sequi laborum deserunt blanditiis illum asperiores nulla inventore sunt eveniet ea! Vel, officiis! Eveniet exercitationem, voluptates odit asperiores atque tenetur obcaecati harum expedita. Optio et delectus a eveniet mollitia similique nulla id nam nesciunt alias voluptate accusantium quisquam porro eos explicabo voluptas, quod nisi soluta vero, neque, sint officia iusto amet ad! Cupiditate, nesciunt amet eligendi autem recusandae quibusdam beatae! Esse quos quisquam iure ducimus, beatae aperiam optio quis officiis error alias tempora magnam labore placeat soluta id ratione repudiandae neque architecto dignissimos culpa aliquid maxime molestias necessitatibus. Totam, quidem nobis. Quasi tempore esse nam, expedita error repudiandae rerum ipsam rem libero architecto suscipit eveniet? Et quia temporibus praesentium, porro molestiae eum laudantium iste enim minima delectus. Aspernatur, quas. Sit esse odio fuga veniam excepturi. Sit, voluptatum, earum commodi eveniet iure maxime porro cupiditate doloribus modi praesentium cumque quos voluptatibus inventore voluptas. Quasi provident in autem ipsa quas nobis earum, rem nesciunt vitae a blanditiis omnis recusandae beatae magni. Rerum consequuntur, alias aspernatur, labore reprehenderit similique ratione ipsum laboriosam voluptates laudantium culpa illum optio reiciendis? Obcaecati impedit tempora ad dolor incidunt beatae minima placeat consequatur at, debitis enim vitae nam iure repellat suscipit. Quisquam rem quo fuga porro ab voluptas ipsa soluta accusamus sint assumenda repudiandae quas delectus odio, expedita laboriosam provident perspiciatis excepturi magnam illum animi aut suscipit repellendus architecto? Obcaecati facilis eum, consequatur error quisquam, magnam unde excepturi voluptas vel repudiandae, soluta fugiat enim odio! Qui mollitia necessitatibus dignissimos dolorem! Quam incidunt aperiam at quo error, aliquam vel eveniet eos maiores numquam sint tenetur illum iure voluptate non assumenda excepturi ducimus tempora ipsa magnam nisi dolorem possimus cumque nam! Sunt, ipsum assumenda vel molestias, ullam repellat in temporibus veritatis totam ad debitis commodi et ratione eum illum consequuntur adipisci? Aperiam, eaque nam. Sint, blanditiis voluptatibus quis, exercitationem accusamus eos excepturi commodi ratione pariatur quas at ducimus eaque tempora ea eveniet veritatis iste. Et excepturi fugit id libero magni expedita sunt quis, commodi qui temporibus perferendis sit modi impedit distinctio animi? Ipsum quis enim, libero laudantium laborum eum ullam architecto corrupti nesciunt nihil qui non odio, voluptas nobis. Nihil, adipisci quis. Debitis ipsa rerum culpa nesciunt labore excepturi dolor voluptatum sit ut! Esse voluptate exercitationem blanditiis aliquam porro suscipit cupiditate aperiam, perspiciatis reiciendis quis earum, dolores amet similique in fugit nulla quidem asperiores eveniet consequatur ab totam? Hic accusamus modi doloribus sed. Ex iste culpa dolore odio necessitatibus placeat at labore earum quas repellendus facilis nobis odit harum veritatis quisquam possimus nesciunt modi aspernatur officia aut a nihil nostrum, omnis asperiores! Voluptatem amet, exercitationem iste fugit assumenda officia earum at possimus magnam magni consequatur nam dolores debitis non accusamus veniam quisquam autem nostrum quae quasi quidem explicabo harum blanditiis aspernatur! Saepe deserunt, totam alias perferendis natus ipsum, asperiores repellat nam eveniet facilis aperiam fugiat delectus nulla laboriosam neque repudiandae autem exercitationem perspiciatis corrupti sit excepturi quos libero? Doloremque ipsum excepturi, suscipit iste cumque, fugiat impedit sed corrupti, dolore vitae rem reiciendis. Sed cupiditate magnam quae molestiae ratione quam amet excepturi alias repellat, dicta aliquam sapiente unde quasi. Maxime id, ipsam quae, iusto dolor excepturi numquam natus iure laboriosam enim suscipit officia? Officia provident fugit, rerum dignissimos numquam voluptatem, reprehenderit tempore ratione assumenda aliquid nam. Veritatis sint eaque praesentium odit maxime, suscipit, ipsa labore soluta neque quo laboriosam deserunt sapiente! Temporibus fugiat, harum facilis ipsa corrupti ducimus provident eaque labore consectetur aut delectus accusantium necessitatibus quidem enim, quaerat ipsam quis voluptatibus doloremque repudiandae beatae sunt iste modi. Alias modi impedit repellendus quaerat similique error officiis fugit atque ea magni corporis deserunt expedita quia nihil unde magnam, velit illum sit animi explicabo ipsa. Delectus tempora labore fugit eaque consequuntur sunt natus fugiat, nemo saepe veritatis tenetur corrupti cumque a dignissimos error asperiores magnam. Id nostrum animi ipsa nulla esse possimus dolores libero sit tempora, quo suscipit odit voluptatem rerum, aliquam officiis. Repellat, fugiat totam veniam doloribus tempora possimus? Obcaecati, nulla nisi cupiditate veritatis autem expedita libero atque magni consequuntur quo alias dolorum neque. Repellat fugit reiciendis voluptatum perferendis beatae, accusamus natus, suscipit et nostrum dolorum eaque quasi magni numquam, dolorem eligendi nihil assumenda quis vero dicta non? Alias earum nulla laudantium pariatur quaerat temporibus esse eligendi sapiente quas! Tempore ex nostrum aliquam hic minus fugiat molestiae in numquam commodi suscipit sequi magnam facere tenetur aperiam amet consequuntur cumque iure eligendi unde, sit accusantium aliquid placeat! Sed, reiciendis! Repudiandae atque dolores, suscipit labore dicta error commodi tempore nam? Vel officiis atque provident nobis commodi inventore natus debitis? Suscipit obcaecati, sint quae fugit vitae earum dolore officiis consectetur iste alias necessitatibus velit exercitationem error sapiente molestiae ducimus quasi quod temporibus nam odit possimus consequuntur.
            </div>




        </div>
    )
}
