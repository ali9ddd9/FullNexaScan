import React from 'react'
const Cards = () => {
  return (
    <>
      <section className='cards'>
        <div className="head">
          <h2>Choose the best plan</h2>
          <p>Explore and select the subscription plan that suits you best, whether it's our flexible monthly option or our cost-effective yearly plan.</p>
        </div>
        <div className="flex-box">
          <div className="box">
            <div className="title">Basic</div>
            <div className="price">
              <b>$50.99</b>
              <span>per mouth</span>
            </div>
            <div className="featuress">
              <div>Full access to all tools</div>
              <div>Prompt Wizard</div>
              <div>Chat about multiple documents at once</div>
              <div>Regular updates</div>
              <div>Cancel anytime</div>
            </div>
            <div className="buttons">
              <button>Subscribe Now</button>
            </div>
          </div>
          <div className="box">
            <div className="title">Standard</div>
            <div className="price">
              <b>$70.99</b>
              <span>per mouth</span>
            </div>
            <div className="featuress">
              <div>Full access to all tools</div>
              <div>Prompt Wizard</div>
              <div>Chat about multiple documents at once</div>
              <div>Regular updates</div>
              <div>Cancel anytime</div>
            </div>
            <div className="buttons">
              <button>Subscribe Now</button>
            </div>
          </div>
          <div className="box">
            <div className="title">Premium</div>
            <div className="price">
              <b>$99.9</b>
              <span>per mouth</span>
            </div>
            <div className="featuress">
              <div>Full access to all tools</div>
              <div>Prompt Wizard</div>
              <div>Chat about multiple documents at once</div>
              <div>Regular updates</div>
              <div>Cancel anytime</div>
            </div>
            <div className="buttons">
              <button>Subscribe Now</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cards
