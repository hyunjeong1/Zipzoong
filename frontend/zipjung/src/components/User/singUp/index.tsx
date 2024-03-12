'use client'
import Image from "next/image";
import PhotoUpload from '@/components/Common/PhotoUpload';
import NicknameInput from '@/components/Common/NicknameInput';
import StartButton from "@/components/User/singUp/StartButton";
import styles from '@/components/User/singUp/index.module.scss'

import { useState } from "react";

function Form() {
    const [firstImg, setFirstImg] = useState<string | null>(null);
    
    const address: string = '/';
    const detail: string = '시작하기';
    const styleName: string = 'signUp';

    // console.log(firstImg);


    return (
        <div className={styles.signUp}>
            <a href="/">
                <Image
                    src="/images/zipjung_logo.png"
                    width={150}
                    height={80}
                    alt='zipjung_logo'
                    className={styles.logo}
                />
            </a>
            <div className={styles.signUpTitle}>사용하실 닉네임을 입력해주세요.</div>
            <div className={styles.signUpInfo}>
                <PhotoUpload firstImg={firstImg} setFirstImg={setFirstImg}/>
                <NicknameInput />
            </div>
            <StartButton address={address} detail={detail} styleName={styleName} firstImg={firstImg}/>
        </div>
    )
}

export default Form