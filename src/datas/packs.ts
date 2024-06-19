export type Pack = {
    min: number;
    max: number;
    name: string;
    step: number;
};
  
export const packs: {
    [key: string]: Pack[];
} = {
    "beije Ped": [
        {
            min: 0,
            max: 60,
            name: "Standart Ped",
            step: 10
        },
        {
            min: 0,
            max: 60,
            name: "Süper Ped",
            step: 10
        },
        {
            min: 0,
            max: 60,
            name: "Süper+ Ped",
            step: 10
        }
    ],
    "beije Günlük Ped": [
        {
            min: 0,
            max: 100,
            name: "Günlük Ped",
            step: 10,
        },
        {
            min: 0,
            max: 100,
            name: "Süper Günlük Ped",
            step: 10
        }
    ],
    "beije Tampon": [
        {
            min: 0,
            max: 60,
            name: "Mini Tampon",
            step: 10,
        },
        {
            min: 0,
            max: 60,
            name: "Standart Tampon",
            step: 10
        },
        {
            min: 0,
            max: 60,
            name: "Süper Tampon",
            step: 10
        }
    ]
};
