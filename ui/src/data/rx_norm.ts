const rx_norms = {
    Entities: [
        {
            Id: 0,
            Text: 'Clonidine',
            Category: 'MEDICATION',
            Type: 'GENERIC_NAME',
            Score: 0.9942535758018494,
            BeginOffset: 235,
            EndOffset: 244,
            Attributes: [],
            Traits: [],
            RxNormConcepts: [
                {
                    Description: 'clonidine',
                    Code: '2599',
                    Score: 0.9148101806640625,
                },
                {
                    Description: 'Clonidine Hydrochloride 0.2 MG Oral Tablet',
                    Code: '884185',
                    Score: 0.6776907444000244,
                },
                {
                    Description: 'Clonidine Hydrochloride 0.1 MG Oral Tablet',
                    Code: '884173',
                    Score: 0.5644848346710205,
                },
                {
                    Description:
                        '12 HR Clonidine Hydrochloride 0.2 MG Extended Release Oral Tablet',
                    Code: '1013937',
                    Score: 0.5447497367858887,
                },
                {
                    Description:
                        'Clonidine Hydrochloride 0.2 MG Oral Tablet [Catapres]',
                    Code: '884187',
                    Score: 0.3217916190624237,
                },
            ],
        },
        {
            Id: 1,
            Text: 'Vyvanse',
            Category: 'MEDICATION',
            Type: 'BRAND_NAME',
            Score: 0.999572217464447,
            BeginOffset: 300,
            EndOffset: 307,
            Attributes: [
                {
                    Type: 'DOSAGE',
                    Score: 0.9939801692962646,
                    RelationshipScore: 0.9999656677246094,
                    Id: 2,
                    BeginOffset: 308,
                    EndOffset: 314,
                    Text: '50 mgs',
                    Traits: [],
                },
                {
                    Type: 'ROUTE_OR_MODE',
                    Score: 0.9996941089630127,
                    RelationshipScore: 0.9995054006576538,
                    Id: 3,
                    BeginOffset: 315,
                    EndOffset: 317,
                    Text: 'po',
                    Traits: [],
                },
                {
                    Type: 'FREQUENCY',
                    Score: 0.9833589196205139,
                    RelationshipScore: 0.9999524354934692,
                    Id: 4,
                    BeginOffset: 318,
                    EndOffset: 336,
                    Text: 'at breakfast daily',
                    Traits: [],
                },
            ],
            Traits: [],
            RxNormConcepts: [
                {
                    Description:
                        'lisdexamfetamine dimesylate 50 MG Oral Capsule [Vyvanse]',
                    Code: '854852',
                    Score: 0.8883932828903198,
                },
                {
                    Description:
                        'lisdexamfetamine dimesylate 50 MG Chewable Tablet [Vyvanse]',
                    Code: '1871469',
                    Score: 0.7482635378837585,
                },
                {
                    Description: 'Vyvanse',
                    Code: '711043',
                    Score: 0.7041242122650146,
                },
                {
                    Description:
                        'lisdexamfetamine dimesylate 70 MG Oral Capsule [Vyvanse]',
                    Code: '854844',
                    Score: 0.23675969243049622,
                },
                {
                    Description:
                        'lisdexamfetamine dimesylate 60 MG Oral Capsule [Vyvanse]',
                    Code: '854848',
                    Score: 0.14077001810073853,
                },
            ],
        },
        {
            Id: 5,
            Text: 'Clonidine',
            Category: 'MEDICATION',
            Type: 'GENERIC_NAME',
            Score: 0.9981235861778259,
            BeginOffset: 351,
            EndOffset: 360,
            Attributes: [
                {
                    Type: 'STRENGTH',
                    Score: 0.7052786946296692,
                    RelationshipScore: 0.9999960660934448,
                    Id: 6,
                    BeginOffset: 361,
                    EndOffset: 368,
                    Text: '0.2 mgs',
                    Traits: [],
                },
                {
                    Type: 'DOSAGE',
                    Score: 0.7810394167900085,
                    RelationshipScore: 0.9999927282333374,
                    Id: 7,
                    BeginOffset: 372,
                    EndOffset: 388,
                    Text: '1 and 1 / 2 tabs',
                    Traits: [],
                },
                {
                    Type: 'ROUTE_OR_MODE',
                    Score: 0.9981386661529541,
                    RelationshipScore: 0.9999603033065796,
                    Id: 8,
                    BeginOffset: 389,
                    EndOffset: 391,
                    Text: 'po',
                    Traits: [],
                },
                {
                    Type: 'FREQUENCY',
                    Score: 0.9974133372306824,
                    RelationshipScore: 0.9999905824661255,
                    Id: 9,
                    BeginOffset: 392,
                    EndOffset: 395,
                    Text: 'qhs',
                    Traits: [],
                },
            ],
            Traits: [],
            RxNormConcepts: [
                {
                    Description: 'Clonidine Hydrochloride 0.2 MG Oral Tablet',
                    Code: '884185',
                    Score: 0.9600071907043457,
                },
                {
                    Description:
                        '12 HR Clonidine Hydrochloride 0.2 MG Extended Release Oral Tablet',
                    Code: '1013937',
                    Score: 0.786146879196167,
                },
                {
                    Description:
                        'Chlorthalidone 15 MG / Clonidine Hydrochloride 0.2 MG Oral Tablet',
                    Code: '884198',
                    Score: 0.601354718208313,
                },
                {
                    Description: 'Clonidine Hydrochloride 0.1 MG Oral Tablet',
                    Code: '884173',
                    Score: 0.5560968518257141,
                },
                {
                    Description: 'Clonidine Hydrochloride 0.3 MG Oral Tablet',
                    Code: '884189',
                    Score: 0.45314356684684753,
                },
            ],
        },
    ],
    ModelVersion: '20200504.1.0',
}

export default rx_norms
