import React from 'react'
import './WhatWeDo.css'
import { FaBusinessTime, FaChartLine } from 'react-icons/fa'
import { MdOutlineComputer, MdBusiness } from 'react-icons/md'

const WhatWeDo = ({ language }) => {
  return (
    <div className='what-we-do' id='what-we-do'>
      <div className="container">
        <h2>{language ? "What We Do" : "ماذا نقدم"}</h2>
        <div className="what-we-do-content">
          <div className="text-section">
            <div className={`content ${!language ? 'rtl' : ''}`}>
              {language ? (
                // English Content
                <>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <FaBusinessTime />
                    </div>
                    <h3>Consultation</h3>
                    <p>The first step for any business is the discovery phase, where the goal is to learn the client's business. Mubaader Services will help uncover your business’s mission & objectives.</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <FaChartLine />
                    </div>
                    <h3>Feasibility Studys</h3>
                    <p>Mubaader Services will research the products / services of the business</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <FaChartLine />
                    </div>
                    <h3>Branding</h3>
                    <p>Mubaader Services provides innovative branding services, solution , consultancy and development. Branding identity and brand design services include logo design, website design and development, print design, and marketing strategy.</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <MdOutlineComputer />
                    </div>
                    <h3>Financial Resources</h3>
                    <p>Mubaader Services connects you to the right investor  ( Single, Angle, Incubator or Bank).</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <MdBusiness />
                    </div>
                    <h3>Location Search</h3>
                    <p>Mubaader Services provides location search services for your small and medium business. We will search for you the best location for your business startup</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <MdBusiness />
                    </div>
                    <h3>Ministerial Support</h3>
                    <p>Mubaader Services provides ministerial support and getting license for your small and medium business.</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <MdBusiness />
                    </div>
                    <h3>Human Resources</h3>
                    <p>Mubaader Services provides Human Resources Services for your small and medium business. We hire your staff you need in order to establish your business local as well as international.</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <MdBusiness />
                    </div>
                    <h3>Interior Design 3D & Details</h3>
                    <p>Mubaader Services provides exceptional Interior Designing services to transform your office into the workplace you envision to be.</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <MdBusiness />
                    </div>
                    <h3>Business Construction</h3>
                    <p>Mubaader Services provides construction services for your business like electrical & mechanical works, etc.</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <MdBusiness />
                    </div>
                    <h3>Photography</h3>
                    <p>Mubaader Services helps capture attractive images for all types of marketing ads & campaigns and they will leave a lasting impression on your customers.</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <MdBusiness />
                    </div>
                    <h3>Videography</h3>
                    <p>Mubaader Services shoots and captures Commercial videos produced specifically for the web to give you a definite advantage in your online advertising campaigns.</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <MdBusiness />
                    </div>
                    <h3>Bloggers Connection</h3>
                    <p>Mubaader Services connects you with bloggers for you social content promotions.</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <MdBusiness />
                    </div>
                    <h3>Social Media Marketing & Managementg</h3>
                    <p>Mubaader Services intergrates your business in social media sites like facebook, twitter, instagram, youtube, etc. by advertising for your business.</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <MdBusiness />
                    </div>
                    <h3>Website / Application Design & Development</h3>
                    <p>Mubaader Services provides Web & App Designing  & Development Services for your small and medium business. Design your website with the latest designs (Urban, Swiss, White Space, & more). We develop your website & mobile application and provide you with content management. </p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <MdBusiness />
                    </div>
                    <h3>Accounting</h3>
                    <p>Mubaader Services provides financial accounting services for your small and medium sized business.</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <MdBusiness />
                    </div>
                    <h3>Legal Consulting & Contracts</h3>
                    <p>Mubaader Services provides Legal consulting and staff & partnership contracts.</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <MdBusiness />
                    </div>
                    <h3>Negotiation Brand or Franchise</h3>
                    <p>Mubaader Services negotiates instead of you to get your FRANCHISE or LOCATION or Products Prices You Need.</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <MdBusiness />
                    </div>
                    <h3>Business Performance Analysis / Follow up</h3>
                    <p>Mubaader Services provides performance analysis and net assessment for your small and medium sized businesses that would benefit you in your planning and decision making</p>
                  </div>
                </>
              ) : (
                // Arabic Content
                <>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <FaBusinessTime />
                    </div>
                    <h3>الاستشارات التجارية</h3>
                    <p>الخطوة الاولى لأ مشروع هي مرحلة الاكتشاف وتعليم الزبائن كيفية تحديد الاهداف من المشروع المراد انشاعه و شركة مبادر ستساعدك في كشف المهمة و الاهداف.</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <FaChartLine />
                    </div>
                    <h3>دراسة الجدوى</h3>
                    <p>سنقوم بعمل دراسة شاملة لكل تفاصيل المشروع (الخدمات ‎١‏ المنتجات). تسعير لجميع الخدمات ‎١‏ ‏المنتجات , تحليل تفصيلي للمكان والمصروفات المتوقعة , تحليل تفصيلي لمرتبات الموظفين , تحليل تفصيلي لصافيٍ واجمالي الربح , تحليل نقطة التعادل.</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <MdOutlineComputer />
                    </div>
                    <h3>هوية المشروع</h3>
                    <p>شركة مبادر توفر الخدمات الاعلانية الرائدة . وايجاد الحلول و الاستشارات و التطوير . هوية العلامة التجارية و خدمات تصميم العلامة التجارية تشمل تصميم الشعار . تصميم وطباعة. واستراتيجية التسويق.</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <MdBusiness />
                    </div>
                      <h3>موقع المشروع</h3>
                    <p>شركة مبادر توفر لك خدمة البحث عن الموقع لمشروع الصفير و المتوسط الخاص بك . و نحن سوف نبحث لك افضل المواقع لبدء مشروعك الخاص.</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <MdBusiness />
                    </div>
                    <h3>إستخراج الرخصة و الد عم الوزاري</h3>
                    <p>شركة مبادر توفر الدعم الوزاري و الحصول على رخصة لمشروعك الصفير و المتوسط.</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <MdBusiness />
                    </div>
                    <h3>الموارد البشرية</h3>
                    <p>خدمات مبادر توفر لك كل الموارد البشرية لمشروعك الصغير أو المتوسط. نوظف لك كل ما تحتاجه من عمالة من الكويت أو الخارج لمشروعك.</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <MdBusiness />
                    </div>
                    <h3>التصميم الداخلي 3D و التقاصيل</h3>
                    <p>نوفرلك تصاميم داخلية لبناء مكتبك. مشروعك. شركتك. كافيه. مطعم. نادي صحي. أو اء شء تتخيله إلى حقيقه.</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <MdBusiness />
                    </div>
                    <h3>الانشاءات التجارية</h3>
                    <p>نوفر خدمات البناء لعملك مثل الأعمال الكهربائية والميكانيكية والمخطط الأرضي والاتوكاد واماكن الأثاث والمقاولات حتى تسليم المفتاح.</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <MdBusiness />
                    </div>
                    <h3>التصوير</h3>
                    <p>شركة مبادر تستطيع أن تلتقط صور جذابة لجميع أنواع الإعلانات و الحملات التسويقية الت ستترك انطباعا مؤثر و طويل الأمد على الزبائن.</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <MdBusiness />
                    </div>
                    <h3>تواصل مع البلوقرز</h3>
                    <p>شركة مبادرتربطك مع المدونين للحصول على مضمون اجتماعي افضل.</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <MdBusiness />
                    </div>
                    <h3>تصوير الفيدبو</h3>
                    <p>تقوم شركة مبادر بتصوير وإنتاج الصور والفيديوهات الدعاية وخاصة للمواقع الالكترونية لتعطيك ميزة أكيدة في الحملات الإعلانية الخاصة بك على الانترنت.</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <MdBusiness />
                    </div>
                    <h3>ادارة و تسويق عبر المواقع الوسائل الاجتماعية</h3>
                    <p>شركة مبادر تدمج مشروعك الخاص في مواقع وسائل الاعلام الاجتماعية و الاعلان عنها في الفيسبوك. تويتر الاننستقرام. يوتيوب.</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <MdBusiness />
                    </div>
                    <h3>تصميم تطبيق المواقع وتصويرها</h3>
                    <p>طور الويبسايت بإحترافية و سرعة و دقة و نوفر لك قدرة التحكم و إدارة محتوى و صور الموقع. من ضمن التطوير. نحجز لك إسم الموقع و نوفر الايميلات الخاصة </p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <MdBusiness />
                    </div>
                    <h3>خدمات المحاسبة</h3>
                    <p>شركة مبادر توفرلك خدمة المحاسبة المالية لمشروعك الصفير و المتوسط.</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <MdBusiness />
                    </div>
                    <h3>استشارات وعقود قانونية</h3>
                    <p>مبادر تُقدم خدمة الاستشارات القانونية وعقود الموظفين والشراكة.</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <MdBusiness />
                    </div>
                    <h3>التفاوض العلامة التجارية او الفرانشيز</h3>
                    <p>شركة مبادرتوفر خدمة التفاوض لمشروعك الصغير او المتوسط. نتفاوض بدلا منك للحصول على امتياز أو الأسعار الموقع أو المنتجات التي تحتاج إليها من أجل إنشاء مشروع التجاري الخاص بك.</p>
                  </div>
                  <div className="service-card">
                    <div className="icon-wrapper">
                      <MdBusiness />
                    </div>
                    <h3>اداء تحليل الاعمال / المتابعة</h3>
                    <p>شركة مبادر توفر خدمات تحليل و متابعة مشروعك الصفير و المتوسط الخاص بك و من خلالها الاستفادة في التخطيط و اتخاذ القرار.</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo