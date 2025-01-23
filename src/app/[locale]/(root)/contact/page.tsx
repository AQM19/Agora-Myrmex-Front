'use client'

import SnackBar from '@/components/snackbar/SnackBar';
import { Mail, sendMail } from '@/core';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { IoMailOutline } from 'react-icons/io5'

const ContactPage = () => {
    const [isSnackbarVisible, setIsSnackbarVisible] = useState(false)
    const [message, setMessage] = useState('');

    const t = useTranslations('Contact');

    const { handleSubmit, register, formState: { errors }, reset } = useForm<Mail>({
        defaultValues: {
            name: '',
            subject: '',
            email: '',
            message: ''
        },
        mode: 'onBlur'
    });

    const onSubmit = async (data: Mail) => {
        const { ok, message } = await sendMail(data);

        if (!ok) {
            console.debug('No se pudo mandar el correo: ', message);
            setMessage('No se ha podido enviar el correo');
            showSnackbar();
            return;
        }

        reset();
        setMessage('Correo enviado correctamente');
        showSnackbar();
    };

    const showSnackbar = () => {
        setIsSnackbarVisible(true)
    }

    const hideSnackbar = () => {
        setIsSnackbarVisible(false)
    }

    return (
        <section id='contact-page' className='container mx-auto py-5 flex flex-col gap-8'>

            <div className='py-10 w-full max-w-2xl mx-auto px-4 rounded-lg bg-neutral-100 dark:bg-neutral-900 shadow-lg shadow-black dark:shadow-white'>

                <h2 className="text-3xl font-bold mb-8 text-center">{t('title')}</h2>

                <form
                    className='max-w-2xl mx-auto'
                    onSubmit={handleSubmit(onSubmit)}>

                    {/* Campo Name */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-semibold mb-1">{t('name')}</label>
                        <input
                            type="text"
                            id="name"
                            placeholder={t('name placeholder')}
                            className='w-full rounded py-1 px-4'
                            {
                            ...register("name", {
                                required: t("name required"),
                                minLength: {
                                    value: 3,
                                    message: t("name too short"),
                                },
                                maxLength: {
                                    value: 50,
                                    message: t("name too long"),
                                },
                            })
                            }
                            aria-invalid={!!errors.name}
                        />
                        {
                            errors.name && (
                                <p
                                    className={`text-red-500 transition-opacity duration-300 ease-in-out ${errors.name && "opacity-100 animate-fadeIn"}`}
                                    role="alert">
                                    {errors.name.message}
                                </p>
                            )
                        }

                    </div>
                    {/* Campo Name */}

                    {/* Campo email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold mb-1">{t('email')}</label>
                        <input
                            type="email"
                            id="email"
                            placeholder={t('email placeholder')}
                            {
                            ...register("email", {
                                required: t("email required"),
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: t("email invalid"),
                                },
                            })
                            }
                            className='w-full rounded py-1 px-4'
                            aria-invalid={!!errors.email}
                        />
                        {
                            errors.email && (
                                <p
                                    className={`text-red-500 transition-opacity duration-300 ease-in-out ${errors.email && "opacity-100 animate-fadeIn"}`}
                                    role="alert">
                                    {errors.email.message}
                                </p>
                            )
                        }
                    </div>
                    {/* Campo email */}

                    {/* Campo Name */}
                    <div className="mb-4">
                        <label htmlFor="subject" className="block text-sm font-semibold mb-1">{t('subject')}</label>
                        <input
                            type="text"
                            id="subject"
                            placeholder={t('subject placeholder')}
                            className='w-full rounded py-1 px-4'
                            {
                            ...register("subject", {
                                required: t("subject required"),
                                minLength: {
                                    value: 3,
                                    message: t("subject too short"),
                                },
                                maxLength: {
                                    value: 50,
                                    message: t("subject too long"),
                                },
                            })
                            }
                            aria-invalid={!!errors.subject}
                        />
                        {
                            errors.subject && (
                                <p
                                    className={`text-red-500 transition-opacity duration-300 ease-in-out ${errors.subject && "opacity-100 animate-fadeIn"}`}
                                    role="alert">
                                    {errors.subject.message}
                                </p>
                            )
                        }

                    </div>
                    {/* Campo Name */}

                    {/* Campo message */}
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-semibold mb-1">{t('message')}</label>
                        <textarea
                            id="message"
                            rows={4}
                            minLength={10}
                            maxLength={1000}
                            placeholder={t("message placeholder")}
                            {
                            ...register("message", {
                                required: t("message required"),
                                minLength: {
                                    value: 10,
                                    message: t("message too short"),
                                },
                                maxLength: {
                                    value: 1000,
                                    message: t("message too long"),
                                },
                            })
                            }
                            className='w-full rounded py-1 px-4'
                            aria-invalid={!!errors.message}
                        />
                        {
                            errors.message && (
                                <p
                                    className={`text-red-500 transition-opacity duration-300 ease-in-out ${errors.message && "opacity-100 animate-fadeIn"}`}
                                    role="alert">
                                    {errors.message.message}
                                </p>
                            )
                        }
                    </div>
                    {/* Campo message */}

                    <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 font-semibold text-sm border-solid border-4 px-1 py-4 rounded border-neutral-900 text-aero dark:border-neutral-50 disabled:border-gray-400 disabled:text-gray-400 transition-all">
                        <IoMailOutline size={22} />
                        {t('send message')}
                    </button>

                </form>

            </div>

            <SnackBar message={message} isVisible={isSnackbarVisible} onClose={hideSnackbar} />
        </section>
    )
}

export default ContactPage