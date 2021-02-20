const icd_ten = {
    Entities: [
        {
            Id: 0,
            Text: 'coronary artery disease',
            Category: 'MEDICAL_CONDITION',
            Type: 'DX_NAME',
            Score: 0.993346095085144,
            BeginOffset: 101,
            EndOffset: 124,
            Attributes: [],
            Traits: [
                {
                    Name: 'DIAGNOSIS',
                    Score: 0.9666619300842285,
                },
            ],
            ICD10CMConcepts: [
                {
                    Description:
                        'Atherosclerotic heart disease of native coronary artery without angina pectoris',
                    Code: 'I25.10',
                    Score: 0.8737154006958008,
                },
                {
                    Description:
                        'Atherosclerotic heart disease of native coronary artery with unstable angina pectoris',
                    Code: 'I25.110',
                    Score: 0.742963433265686,
                },
                {
                    Description:
                        'Atherosclerotic heart disease of native coronary artery with unspecified angina pectoris',
                    Code: 'I25.119',
                    Score: 0.7408557534217834,
                },
                {
                    Description:
                        'Atherosclerotic heart disease of native coronary artery',
                    Code: 'I25.1',
                    Score: 0.6346737146377563,
                },
                {
                    Description: 'Old myocardial infarction',
                    Code: 'I25.2',
                    Score: 0.6345109343528748,
                },
            ],
        },
        {
            Id: 2,
            Text: 'atrial fibrillation',
            Category: 'MEDICAL_CONDITION',
            Type: 'DX_NAME',
            Score: 0.9921880960464478,
            BeginOffset: 127,
            EndOffset: 146,
            Attributes: [],
            Traits: [
                {
                    Name: 'DIAGNOSIS',
                    Score: 0.9695355892181396,
                },
            ],
            ICD10CMConcepts: [
                {
                    Description: 'Unspecified atrial fibrillation',
                    Code: 'I48.91',
                    Score: 0.860835611820221,
                },
                {
                    Description: 'Paroxysmal atrial fibrillation',
                    Code: 'I48.0',
                    Score: 0.7782694697380066,
                },
                {
                    Description: 'Chronic atrial fibrillation',
                    Code: 'I48.2',
                    Score: 0.7680703401565552,
                },
                {
                    Description: 'Persistent atrial fibrillation',
                    Code: 'I48.1',
                    Score: 0.7476988434791565,
                },
                {
                    Description: 'Unspecified atrial flutter',
                    Code: 'I48.92',
                    Score: 0.6739833354949951,
                },
            ],
        },
        {
            Id: 3,
            Text: 'hypertension',
            Category: 'MEDICAL_CONDITION',
            Type: 'DX_NAME',
            Score: 0.999303936958313,
            BeginOffset: 149,
            EndOffset: 161,
            Attributes: [],
            Traits: [
                {
                    Name: 'DIAGNOSIS',
                    Score: 0.9725161194801331,
                },
            ],
            ICD10CMConcepts: [
                {
                    Description: 'Essential (primary) hypertension',
                    Code: 'I10',
                    Score: 0.8617088198661804,
                },
                {
                    Description:
                        'Hypertensive heart disease with heart failure',
                    Code: 'I11.0',
                    Score: 0.8153679370880127,
                },
                {
                    Description:
                        'Hypertensive chronic kidney disease with stage 1 through stage 4 chronic kidney disease, or unspecified chronic kidney disease',
                    Code: 'I12.9',
                    Score: 0.8063356876373291,
                },
                {
                    Description:
                        'Hypertensive heart disease without heart failure',
                    Code: 'I11.9',
                    Score: 0.7811897993087769,
                },
                {
                    Description:
                        'Hypertensive heart and chronic kidney disease without heart failure, with stage 1 through stage 4 chronic kidney disease, or unspecified chronic kidney disease',
                    Code: 'I13.10',
                    Score: 0.720578670501709,
                },
            ],
        },
        {
            Id: 4,
            Text: 'hyperlipidemia',
            Category: 'MEDICAL_CONDITION',
            Type: 'DX_NAME',
            Score: 0.9998819828033447,
            BeginOffset: 164,
            EndOffset: 178,
            Attributes: [],
            Traits: [
                {
                    Name: 'DIAGNOSIS',
                    Score: 0.9690807461738586,
                },
            ],
            ICD10CMConcepts: [
                {
                    Description: 'Hyperlipidemia, unspecified',
                    Code: 'E78.5',
                    Score: 0.8253703117370605,
                },
                {
                    Description: 'Pure hypercholesterolemia, unspecified',
                    Code: 'E78.00',
                    Score: 0.5760340094566345,
                },
                {
                    Description: 'Other hyperlipidemia',
                    Code: 'E78.49',
                    Score: 0.5449086427688599,
                },
                {
                    Description: 'Pure hyperglyceridemia',
                    Code: 'E78.1',
                    Score: 0.5033483505249023,
                },
                {
                    Description: 'Mixed hyperlipidemia',
                    Code: 'E78.2',
                    Score: 0.4699546694755554,
                },
            ],
        },
        {
            Id: 5,
            Text: 'chills',
            Category: 'MEDICAL_CONDITION',
            Type: 'DX_NAME',
            Score: 0.9990339279174805,
            BeginOffset: 222,
            EndOffset: 228,
            Attributes: [],
            Traits: [
                {
                    Name: 'SYMPTOM',
                    Score: 0.9505181908607483,
                },
            ],
            ICD10CMConcepts: [
                {
                    Description: 'Chills (without fever)',
                    Code: 'R68.83',
                    Score: 0.5481836199760437,
                },
                {
                    Description: 'Fever, unspecified',
                    Code: 'R50.9',
                    Score: 0.2928210198879242,
                },
                {
                    Description: 'Neutropenia, unspecified',
                    Code: 'D70.9',
                    Score: 0.18764916062355042,
                },
                {
                    Description: 'Relapsing fever, unspecified',
                    Code: 'A68.9',
                    Score: 0.17765052616596222,
                },
                {
                    Description: 'Lassa fever',
                    Code: 'A96.2',
                    Score: 0.16490601003170013,
                },
            ],
        },
        {
            Id: 6,
            Text: 'nausea',
            Category: 'MEDICAL_CONDITION',
            Type: 'DX_NAME',
            Score: 0.9994372725486755,
            BeginOffset: 231,
            EndOffset: 237,
            Attributes: [],
            Traits: [
                {
                    Name: 'SYMPTOM',
                    Score: 0.9181180596351624,
                },
            ],
            ICD10CMConcepts: [
                {
                    Description: 'Nausea',
                    Code: 'R11.0',
                    Score: 0.7258893847465515,
                },
                {
                    Description: 'Nausea with vomiting, unspecified',
                    Code: 'R11.2',
                    Score: 0.6325692534446716,
                },
                {
                    Description: 'Vomiting, unspecified',
                    Code: 'R11.10',
                    Score: 0.4779048264026642,
                },
                {
                    Description: 'Late vomiting of pregnancy',
                    Code: 'O21.2',
                    Score: 0.4512312710285187,
                },
                {
                    Description: 'Cyclical vomiting, not intractable',
                    Code: 'G43.A0',
                    Score: 0.3377425968647003,
                },
            ],
        },
        {
            Id: 9,
            Text: 'flank pain',
            Category: 'MEDICAL_CONDITION',
            Type: 'DX_NAME',
            Score: 0.7346087694168091,
            BeginOffset: 251,
            EndOffset: 261,
            Attributes: [
                {
                    Type: 'ACUITY',
                    Score: 0.9923223853111267,
                    RelationshipScore: 0.8345509171485901,
                    Id: 7,
                    BeginOffset: 240,
                    EndOffset: 245,
                    Text: 'acute',
                    Traits: [],
                },
                {
                    Type: 'DIRECTION',
                    Score: 0.9959741234779358,
                    RelationshipScore: 0.9992771744728088,
                    Id: 8,
                    BeginOffset: 246,
                    EndOffset: 250,
                    Text: 'left',
                    Traits: [],
                },
                {
                    Type: 'DIRECTION',
                    Score: 0.998794674873352,
                    RelationshipScore: 0.7322036623954773,
                    Id: 12,
                    BeginOffset: 287,
                    EndOffset: 291,
                    Text: 'left',
                    Traits: [],
                },
            ],
            Traits: [
                {
                    Name: 'SYMPTOM',
                    Score: 0.8346375226974487,
                },
            ],
            ICD10CMConcepts: [
                {
                    Description: 'Unspecified abdominal pain',
                    Code: 'R10.9',
                    Score: 0.551953911781311,
                },
                {
                    Description: 'Left lower quadrant pain',
                    Code: 'R10.32',
                    Score: 0.4286728501319885,
                },
                {
                    Description: 'Left upper quadrant pain',
                    Code: 'R10.12',
                    Score: 0.38236838579177856,
                },
                {
                    Description: 'Generalized abdominal pain',
                    Code: 'R10.84',
                    Score: 0.3561092019081116,
                },
                {
                    Description: 'Upper abdominal pain, unspecified',
                    Code: 'R10.10',
                    Score: 0.31839630007743835,
                },
            ],
        },
        {
            Id: 11,
            Text: 'numbness',
            Category: 'MEDICAL_CONDITION',
            Type: 'DX_NAME',
            Score: 0.9871178269386292,
            BeginOffset: 271,
            EndOffset: 279,
            Attributes: [
                {
                    Type: 'DIRECTION',
                    Score: 0.998794674873352,
                    RelationshipScore: 0.9999980926513672,
                    Id: 12,
                    BeginOffset: 287,
                    EndOffset: 291,
                    Text: 'left',
                    Traits: [],
                },
                {
                    Type: 'SYSTEM_ORGAN_SITE',
                    Score: 0.9981021285057068,
                    RelationshipScore: 0.9996433258056641,
                    Id: 13,
                    BeginOffset: 292,
                    EndOffset: 295,
                    Text: 'leg',
                    Traits: [],
                },
            ],
            Traits: [
                {
                    Name: 'SYMPTOM',
                    Score: 0.7731428742408752,
                },
            ],
            ICD10CMConcepts: [
                {
                    Description: 'Anesthesia of skin',
                    Code: 'R20.0',
                    Score: 0.7441901564598083,
                },
                {
                    Description: 'Paresthesia of skin',
                    Code: 'R20.2',
                    Score: 0.5018643140792847,
                },
                {
                    Description: 'Other disturbances of skin sensation',
                    Code: 'R20.8',
                    Score: 0.4721694588661194,
                },
                {
                    Description: 'Chemical pneumonitis due to anesthesia',
                    Code: 'J95.4',
                    Score: 0.4213027060031891,
                },
                {
                    Description: 'Hypothermia following anesthesia',
                    Code: 'T88.51',
                    Score: 0.40693506598472595,
                },
            ],
        },
    ],
    ModelVersion: '0.1.0',
}

export default icd_ten
