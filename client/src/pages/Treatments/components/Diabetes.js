import React from 'react';
import '../treatment.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Diabetes = () => {
    return (
        <div className='treatment_parent'>
            <div className='treatment_one_div'>
                <div className='div_one_text'>
                    <h1>ABOUT DIABETES</h1>
                    <p>Metabolic disorder in human body because of disturbance in insulin secretion, leads to high sugar level. This condition is called as diabetes.</p>
                    <p>Insulin is a hormone secreted by pancreas and the level of blood sugar is controlled by insulin. In case of sugar in blood, insulin is produced by pancreas which normalizes the level of glucose by promoting absorption of glucose by body cells. In diabetic patient due to insufficient production of insulin, glucose level rises in the body. Homeopathy Treatment for Diabetes is the best solution to control with medications.</p>

                </div>
                <div className='div_one_img'>
                    <img src="https://www.dranubha.com/wp-content/uploads/2016/04/diabetes-cure1.jpg" alt='diabetes img' />
                </div>
            </div>


            <div className='treatment_two_div'>
                <div className='div_one_text'>
                    <h1>SYMPTOMS OF DIABETES</h1>
                    <ul>
                        <li>Diabetes leads to increased amount of sugar level in blood, thus causing loss of glucose through urine. Urine output i.e. frequency of urine will increase which results in dehydration.</li>
                        <li>Frequent urination will increase water consumption in diabetic patient.</li>
                        <li>Deficiency of insulin in body will lead to weight loss.</li>
                        <li>Weight loss in diabetic patient will occur even after following proper diet.</li>
                        <li>It will take long time to heal any injury in diabetes.</li>
                        <li>Extreme fatigue.</li>
                    </ul>

                </div>
            </div>


            <div className='treatment_three_div'>
                <div>
                    <h1>CAUSES OF DIABETES</h1>
                    <p>Mainly there are three types of diabetes, let’s take a look on causes of each type of diabetes.</p>
                    <Tabs
                        defaultActiveKey="profile"
                        id="justify-tab-example"
                        className="mb-3 tab_class"
                        justify
                    >
                        <Tab className='tab_color' eventKey="home" title="Type-1 Diabetes">
                            <p>The exact reason of getting type 1 diabetes is still not known. It is believed that our body’s immune system destroys the cells which produce insulin in pancreas, thus causing deficiency of insulin and deposition of glucose in bloodstream.</p>
                        </Tab>
                        <Tab eventKey="profile" title="Type-2 Diabetes">
                            <p>In this type of diabetes our cells stop responding to insulin and inability of pancreas to overcome this problem leads to diabetes. Hence instead of going into cells, most of the glucose deposits in bloodstream.</p>
                        </Tab>
                        <Tab eventKey="longer-tab" title="Gestational Diabetes">
                            <p>At the time of pregnancy, placenta secrets hormones for supporting pregnancy and these hormones increase resistance of cells towards insulin, thus causing diabetes.</p>
                        </Tab>

                    </Tabs>
                </div>

            </div>

            <div className='treatment_four_div'>
                <div>
                    <h1>DIABETES TREATMENT IN HOMEOPATHY</h1>
                    <p>Conventional medications often convert diabetes into a life-long disease, but homeopathy is different and is the best way to treat diabetes. It emphasizes on the functioning of pancreas for efficient production of insulin, thus strives to cure the reason due to which diabetes is caused.</p>
                </div>
                <div className='text_img_div'>
                    <p>Dr. Anubha’s homeopathy treatment for diabetes involves understanding each symptom of patient, asking some basic questions and preparing diabetes homeopathy medicine suitable for patient’s symptoms. Dr. Anubha also receives cases in which patient has already done insulin replacement. In such cases, she advices patient to continue the replacement procedures and starts her diabetes homeopathy medicine in Hyderabad simultaneously. After few months when sugar comes to normal level, she tells patient to stop conventional procedures.</p>
                    <img src="https://www.dranubha.com/wp-content/uploads/2016/04/diabetes-cure1.jpg" alt='diabetes img' />
                </div>
                <div>
                    <p>So, if you want homeopathy treatment for diabetes in Hyderabad, Dr. Anubha’s clinic is for you. Many patients have taken diabetes homeopathy treatment from her and are now living a healthy life without any worries. She also provides treatment for Thyroid, Arthritis, Infertility , Sinusitis, Hypertension, Hair problems, Skin problems, Allergy, Asthama, Migraine headache and Spondylitis problems.</p>
                </div>

            </div>

        </div>
    )
}

export default Diabetes