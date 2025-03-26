import z from "zod";
export declare const staffRouter: {
    getProfile: {
        pathParams: z.ZodObject<{
            userId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            userId: string;
        }, {
            userId: string;
        }>;
        method: "GET";
        path: "/staff/profile/:userId";
        responses: {
            200: z.ZodObject<{
                id: z.ZodNumber;
                fullName: z.ZodString;
                permissions: z.ZodObject<{
                    users: z.ZodObject<{
                        read: z.ZodBoolean;
                        write: z.ZodBoolean;
                        delete: z.ZodBoolean;
                    }, "strip", z.ZodTypeAny, {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    }, {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    }>;
                    sellers: z.ZodObject<{
                        read: z.ZodBoolean;
                        write: z.ZodBoolean;
                        verify: z.ZodBoolean;
                    }, "strip", z.ZodTypeAny, {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    }, {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    }>;
                    buyers: z.ZodObject<{
                        read: z.ZodBoolean;
                        write: z.ZodBoolean;
                        verify: z.ZodBoolean;
                    }, "strip", z.ZodTypeAny, {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    }, {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    }>;
                    staff: z.ZodObject<{
                        read: z.ZodBoolean;
                        write: z.ZodBoolean;
                        delete: z.ZodBoolean;
                    }, "strip", z.ZodTypeAny, {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    }, {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    users: {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    };
                    sellers: {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    };
                    buyers: {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    };
                    staff: {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    };
                }, {
                    users: {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    };
                    sellers: {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    };
                    buyers: {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    };
                    staff: {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    };
                }>;
                userId: z.ZodNumber;
                createdAt: z.ZodDate;
                updatedAt: z.ZodDate;
            }, "strip", z.ZodTypeAny, {
                id: number;
                userId: number;
                createdAt: Date;
                updatedAt: Date;
                fullName: string;
                permissions: {
                    users: {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    };
                    sellers: {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    };
                    buyers: {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    };
                    staff: {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    };
                };
            }, {
                id: number;
                userId: number;
                createdAt: Date;
                updatedAt: Date;
                fullName: string;
                permissions: {
                    users: {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    };
                    sellers: {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    };
                    buyers: {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    };
                    staff: {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    };
                };
            }>;
            404: z.ZodObject<{
                message: z.ZodString;
                code: z.ZodString;
                timestamp: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                code: string;
                message: string;
                timestamp: string;
            }, {
                code: string;
                message: string;
                timestamp: string;
            }>;
        };
    };
    createProfile: {
        method: "POST";
        body: z.ZodObject<{
            fullName: z.ZodString;
            userId: z.ZodNumber;
            permissions: z.ZodObject<{
                users: z.ZodObject<{
                    read: z.ZodBoolean;
                    write: z.ZodBoolean;
                    delete: z.ZodBoolean;
                }, "strip", z.ZodTypeAny, {
                    read: boolean;
                    write: boolean;
                    delete: boolean;
                }, {
                    read: boolean;
                    write: boolean;
                    delete: boolean;
                }>;
                sellers: z.ZodObject<{
                    read: z.ZodBoolean;
                    write: z.ZodBoolean;
                    verify: z.ZodBoolean;
                }, "strip", z.ZodTypeAny, {
                    read: boolean;
                    write: boolean;
                    verify: boolean;
                }, {
                    read: boolean;
                    write: boolean;
                    verify: boolean;
                }>;
                buyers: z.ZodObject<{
                    read: z.ZodBoolean;
                    write: z.ZodBoolean;
                    verify: z.ZodBoolean;
                }, "strip", z.ZodTypeAny, {
                    read: boolean;
                    write: boolean;
                    verify: boolean;
                }, {
                    read: boolean;
                    write: boolean;
                    verify: boolean;
                }>;
                staff: z.ZodObject<{
                    read: z.ZodBoolean;
                    write: z.ZodBoolean;
                    delete: z.ZodBoolean;
                }, "strip", z.ZodTypeAny, {
                    read: boolean;
                    write: boolean;
                    delete: boolean;
                }, {
                    read: boolean;
                    write: boolean;
                    delete: boolean;
                }>;
            }, "strip", z.ZodTypeAny, {
                users: {
                    read: boolean;
                    write: boolean;
                    delete: boolean;
                };
                sellers: {
                    read: boolean;
                    write: boolean;
                    verify: boolean;
                };
                buyers: {
                    read: boolean;
                    write: boolean;
                    verify: boolean;
                };
                staff: {
                    read: boolean;
                    write: boolean;
                    delete: boolean;
                };
            }, {
                users: {
                    read: boolean;
                    write: boolean;
                    delete: boolean;
                };
                sellers: {
                    read: boolean;
                    write: boolean;
                    verify: boolean;
                };
                buyers: {
                    read: boolean;
                    write: boolean;
                    verify: boolean;
                };
                staff: {
                    read: boolean;
                    write: boolean;
                    delete: boolean;
                };
            }>;
        }, "strip", z.ZodTypeAny, {
            userId: number;
            fullName: string;
            permissions: {
                users: {
                    read: boolean;
                    write: boolean;
                    delete: boolean;
                };
                sellers: {
                    read: boolean;
                    write: boolean;
                    verify: boolean;
                };
                buyers: {
                    read: boolean;
                    write: boolean;
                    verify: boolean;
                };
                staff: {
                    read: boolean;
                    write: boolean;
                    delete: boolean;
                };
            };
        }, {
            userId: number;
            fullName: string;
            permissions: {
                users: {
                    read: boolean;
                    write: boolean;
                    delete: boolean;
                };
                sellers: {
                    read: boolean;
                    write: boolean;
                    verify: boolean;
                };
                buyers: {
                    read: boolean;
                    write: boolean;
                    verify: boolean;
                };
                staff: {
                    read: boolean;
                    write: boolean;
                    delete: boolean;
                };
            };
        }>;
        path: "/staff/profile";
        responses: {
            201: z.ZodObject<{
                id: z.ZodNumber;
                fullName: z.ZodString;
                permissions: z.ZodObject<{
                    users: z.ZodObject<{
                        read: z.ZodBoolean;
                        write: z.ZodBoolean;
                        delete: z.ZodBoolean;
                    }, "strip", z.ZodTypeAny, {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    }, {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    }>;
                    sellers: z.ZodObject<{
                        read: z.ZodBoolean;
                        write: z.ZodBoolean;
                        verify: z.ZodBoolean;
                    }, "strip", z.ZodTypeAny, {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    }, {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    }>;
                    buyers: z.ZodObject<{
                        read: z.ZodBoolean;
                        write: z.ZodBoolean;
                        verify: z.ZodBoolean;
                    }, "strip", z.ZodTypeAny, {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    }, {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    }>;
                    staff: z.ZodObject<{
                        read: z.ZodBoolean;
                        write: z.ZodBoolean;
                        delete: z.ZodBoolean;
                    }, "strip", z.ZodTypeAny, {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    }, {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    users: {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    };
                    sellers: {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    };
                    buyers: {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    };
                    staff: {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    };
                }, {
                    users: {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    };
                    sellers: {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    };
                    buyers: {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    };
                    staff: {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    };
                }>;
                userId: z.ZodNumber;
                createdAt: z.ZodDate;
                updatedAt: z.ZodDate;
            }, "strip", z.ZodTypeAny, {
                id: number;
                userId: number;
                createdAt: Date;
                updatedAt: Date;
                fullName: string;
                permissions: {
                    users: {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    };
                    sellers: {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    };
                    buyers: {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    };
                    staff: {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    };
                };
            }, {
                id: number;
                userId: number;
                createdAt: Date;
                updatedAt: Date;
                fullName: string;
                permissions: {
                    users: {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    };
                    sellers: {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    };
                    buyers: {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    };
                    staff: {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    };
                };
            }>;
            400: z.ZodObject<{
                message: z.ZodString;
                code: z.ZodString;
                timestamp: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                code: string;
                message: string;
                timestamp: string;
            }, {
                code: string;
                message: string;
                timestamp: string;
            }>;
        };
    };
    updateProfile: {
        pathParams: z.ZodObject<{
            userId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            userId: string;
        }, {
            userId: string;
        }>;
        method: "PUT";
        body: z.ZodObject<{
            fullName: z.ZodOptional<z.ZodString>;
            permissions: z.ZodOptional<z.ZodObject<{
                users: z.ZodObject<{
                    read: z.ZodBoolean;
                    write: z.ZodBoolean;
                    delete: z.ZodBoolean;
                }, "strip", z.ZodTypeAny, {
                    read: boolean;
                    write: boolean;
                    delete: boolean;
                }, {
                    read: boolean;
                    write: boolean;
                    delete: boolean;
                }>;
                sellers: z.ZodObject<{
                    read: z.ZodBoolean;
                    write: z.ZodBoolean;
                    verify: z.ZodBoolean;
                }, "strip", z.ZodTypeAny, {
                    read: boolean;
                    write: boolean;
                    verify: boolean;
                }, {
                    read: boolean;
                    write: boolean;
                    verify: boolean;
                }>;
                buyers: z.ZodObject<{
                    read: z.ZodBoolean;
                    write: z.ZodBoolean;
                    verify: z.ZodBoolean;
                }, "strip", z.ZodTypeAny, {
                    read: boolean;
                    write: boolean;
                    verify: boolean;
                }, {
                    read: boolean;
                    write: boolean;
                    verify: boolean;
                }>;
                staff: z.ZodObject<{
                    read: z.ZodBoolean;
                    write: z.ZodBoolean;
                    delete: z.ZodBoolean;
                }, "strip", z.ZodTypeAny, {
                    read: boolean;
                    write: boolean;
                    delete: boolean;
                }, {
                    read: boolean;
                    write: boolean;
                    delete: boolean;
                }>;
            }, "strip", z.ZodTypeAny, {
                users: {
                    read: boolean;
                    write: boolean;
                    delete: boolean;
                };
                sellers: {
                    read: boolean;
                    write: boolean;
                    verify: boolean;
                };
                buyers: {
                    read: boolean;
                    write: boolean;
                    verify: boolean;
                };
                staff: {
                    read: boolean;
                    write: boolean;
                    delete: boolean;
                };
            }, {
                users: {
                    read: boolean;
                    write: boolean;
                    delete: boolean;
                };
                sellers: {
                    read: boolean;
                    write: boolean;
                    verify: boolean;
                };
                buyers: {
                    read: boolean;
                    write: boolean;
                    verify: boolean;
                };
                staff: {
                    read: boolean;
                    write: boolean;
                    delete: boolean;
                };
            }>>;
        }, "strip", z.ZodTypeAny, {
            fullName?: string | undefined;
            permissions?: {
                users: {
                    read: boolean;
                    write: boolean;
                    delete: boolean;
                };
                sellers: {
                    read: boolean;
                    write: boolean;
                    verify: boolean;
                };
                buyers: {
                    read: boolean;
                    write: boolean;
                    verify: boolean;
                };
                staff: {
                    read: boolean;
                    write: boolean;
                    delete: boolean;
                };
            } | undefined;
        }, {
            fullName?: string | undefined;
            permissions?: {
                users: {
                    read: boolean;
                    write: boolean;
                    delete: boolean;
                };
                sellers: {
                    read: boolean;
                    write: boolean;
                    verify: boolean;
                };
                buyers: {
                    read: boolean;
                    write: boolean;
                    verify: boolean;
                };
                staff: {
                    read: boolean;
                    write: boolean;
                    delete: boolean;
                };
            } | undefined;
        }>;
        path: "/staff/profile/:userId";
        responses: {
            200: z.ZodObject<{
                id: z.ZodNumber;
                fullName: z.ZodString;
                permissions: z.ZodObject<{
                    users: z.ZodObject<{
                        read: z.ZodBoolean;
                        write: z.ZodBoolean;
                        delete: z.ZodBoolean;
                    }, "strip", z.ZodTypeAny, {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    }, {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    }>;
                    sellers: z.ZodObject<{
                        read: z.ZodBoolean;
                        write: z.ZodBoolean;
                        verify: z.ZodBoolean;
                    }, "strip", z.ZodTypeAny, {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    }, {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    }>;
                    buyers: z.ZodObject<{
                        read: z.ZodBoolean;
                        write: z.ZodBoolean;
                        verify: z.ZodBoolean;
                    }, "strip", z.ZodTypeAny, {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    }, {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    }>;
                    staff: z.ZodObject<{
                        read: z.ZodBoolean;
                        write: z.ZodBoolean;
                        delete: z.ZodBoolean;
                    }, "strip", z.ZodTypeAny, {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    }, {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    }>;
                }, "strip", z.ZodTypeAny, {
                    users: {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    };
                    sellers: {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    };
                    buyers: {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    };
                    staff: {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    };
                }, {
                    users: {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    };
                    sellers: {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    };
                    buyers: {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    };
                    staff: {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    };
                }>;
                userId: z.ZodNumber;
                createdAt: z.ZodDate;
                updatedAt: z.ZodDate;
            }, "strip", z.ZodTypeAny, {
                id: number;
                userId: number;
                createdAt: Date;
                updatedAt: Date;
                fullName: string;
                permissions: {
                    users: {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    };
                    sellers: {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    };
                    buyers: {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    };
                    staff: {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    };
                };
            }, {
                id: number;
                userId: number;
                createdAt: Date;
                updatedAt: Date;
                fullName: string;
                permissions: {
                    users: {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    };
                    sellers: {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    };
                    buyers: {
                        read: boolean;
                        write: boolean;
                        verify: boolean;
                    };
                    staff: {
                        read: boolean;
                        write: boolean;
                        delete: boolean;
                    };
                };
            }>;
            404: z.ZodObject<{
                message: z.ZodString;
                code: z.ZodString;
                timestamp: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                code: string;
                message: string;
                timestamp: string;
            }, {
                code: string;
                message: string;
                timestamp: string;
            }>;
        };
    };
    deleteProfile: {
        pathParams: z.ZodObject<{
            userId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            userId: string;
        }, {
            userId: string;
        }>;
        method: "DELETE";
        path: "/staff/profile/:userId";
        responses: {
            204: z.ZodNull;
            404: z.ZodObject<{
                message: z.ZodString;
                code: z.ZodString;
                timestamp: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                code: string;
                message: string;
                timestamp: string;
            }, {
                code: string;
                message: string;
                timestamp: string;
            }>;
        };
    };
};
