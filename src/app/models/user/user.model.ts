import { Month } from "src/app/shared/enums/month.enum";
import { ProgressBar } from "src/app/shared/enums/progress-bar.enum";
import { SmallRecordType } from "src/app/shared/enums/small-record-type.enum";
import { ContactModel } from "src/app/shared/models/contact/contact.model";
import { SmallRecordModel } from "src/app/shared/models/small-record/small-record.model";
import { YearMonthModel } from "src/app/shared/models/year-month/year-month.model";
import { CertificationsRecordModel } from "../records/certifications-record.model";
import { ExperienceRecordModel } from "../records/experience-record.model";
import { GraduationRecordModel } from "../records/graduation-record.model";

export class UserModel {

    private contacts: Array<ContactModel> = [
        new ContactModel('envelope', 'caiomacedo0102@gmail.com'),
        new ContactModel('phone', '(11) 94249-0491'),
        new ContactModel('location-dot', 'Santo André, São Paulo')
    ];

    private graduations: Array<GraduationRecordModel> = [
        new GraduationRecordModel(
            'Ensino Médio Completo',
            'EE Professor Waldomiro Guimarães',
            'Santo André',
            new YearMonthModel(2012, Month.JANEIRO),
            new YearMonthModel(2018, Month.DEZEMBRO)),
        new GraduationRecordModel(
            'Bacharelado em Ciência da Computação',
            'Faculdade Descomplica',
            'Santo André',
            new YearMonthModel(2022, Month.JANEIRO),
            null)
    ];

    private experiences: Array<ExperienceRecordModel> = [
        new ExperienceRecordModel(
            'Desenvolvedor de Sistemas Junior',
            'DXC Technology',
            'Santo André',
            new YearMonthModel(2021, Month.NOVEMBRO),
            null,
            'Atuo com o desenvolvimento de aplicações, exercendo implementação, manutenção e sustentação dos serviços.'
            + ' Adiciono também que atuo com análise e correção de vulnerabilidades de algumas aplicações e sistemas internos.'),
        new ExperienceRecordModel(
            'Desenvolvedor de Jogos',
            'Interloper Studios',
            'Santo André',
            new YearMonthModel(2020, Month.SETEMBRO),
            new YearMonthModel(2021, Month.DEZEMBRO),
            'Atuei na parte do desenvolvimento de ambientes web, exercendo a implementação e manutenção de APIs e '
            + 'criação de páginas dinâmicas com validação e segurança. Adiciono também que atuo como programador de jogos digitais 2D e 3D utilizando Unity.'),
        new
            ExperienceRecordModel(
                'Engenheiro de Software JavaEE',
                'Unidac',
                'Santo André',
                new YearMonthModel(2021, Month.JULHO),
                new YearMonthModel(2021, Month.NOVEMBRO),
                'Atuei com o desenvolvimento de backends para clientes usando os frameworks Spring Boot e SoulMV, '
                + 'e utilizando bancos de dados relacionais (Oracle, MySQL, Postgres etc)')
    ];

    private certifications: Array<CertificationsRecordModel> = [
        new CertificationsRecordModel(
            'Docker para Desenvolvedores (com Docker Swarm e Kubernetes)',
            'Udemy',
            'Santo André',
            null,
            new YearMonthModel(2021, Month.AGOSTO)),
        new CertificationsRecordModel(
            'Java 2022 COMPLETO: Do Zero ao Profissional + Projetos!',
            'Udemy',
            'Santo André',
            null,
            new YearMonthModel(2022, Month.MAIO)),
        new CertificationsRecordModel(
            'Git e GitHub do básico ao avançado (c/ gist e GitHub Pages)',
            'Udemy',
            'Santo André',
            null,
            new YearMonthModel(2022, Month.MAIO)),
        new CertificationsRecordModel(
            'Testes unitários em JAVA: Domine JUnit, Mockito e TDD',
            'Udemy',
            'Santo André',
            null,
            new YearMonthModel(2022, Month.JUNHO)),
        new CertificationsRecordModel(
            'SOLID - Os 5 Princípios para as Boas Práticas da POO',
            'Udemy',
            'Santo André',
            null,
            new YearMonthModel(2022, Month.JUNHO)),
        new CertificationsRecordModel(
            'Padrões de Projeto em JAVA na Prática!',
            'Udemy',
            'Santo André',
            null,
            new YearMonthModel(2022, Month.JUNHO)),
    ];

    private personal: Array<SmallRecordModel> = [
        new SmallRecordModel('Linkedin', 'linkedin.com/in/lordencaio', SmallRecordType.TEXT)
    ]

    private competences: Array<SmallRecordModel>  = [
        new SmallRecordModel('Aprendizado Continuo', null, SmallRecordType.PROGRESS_BAR, ProgressBar.LEVEL3),
        new SmallRecordModel('Autonomia', null, SmallRecordType.PROGRESS_BAR, ProgressBar.LEVEL4),
        new SmallRecordModel('Criatividade', null, SmallRecordType.PROGRESS_BAR, ProgressBar.LEVEL4),
        new SmallRecordModel('Resiliência', null, SmallRecordType.PROGRESS_BAR, ProgressBar.LEVEL3),                
        new SmallRecordModel('Resolução de Problemas', null, SmallRecordType.PROGRESS_BAR, ProgressBar.LEVEL3),
    ]

    private languages: Array<SmallRecordModel> = [
        new SmallRecordModel('Português', null, SmallRecordType.PROGRESS_BAR, ProgressBar.LEVEL5),
        new SmallRecordModel('Inglês', null, SmallRecordType.PROGRESS_BAR, ProgressBar.LEVEL2),
    ]

    private interests: Array<SmallRecordModel> = [
        new SmallRecordModel(null, 'Segurança da Informação', SmallRecordType.SQUARE_BAR),
        new SmallRecordModel(null, 'Desenvolvimento de Sistemas', SmallRecordType.SQUARE_BAR),
        new SmallRecordModel(null, 'Desenvolvimento de Jogos', SmallRecordType.SQUARE_BAR),
    ]

    public getContacts(): Array<ContactModel> {
        return this.contacts;
    }

    public getGraduations(): Array<GraduationRecordModel> {
        return this.graduations;
    }

    public getExperiences(): Array<ExperienceRecordModel> {
        return this.experiences;
    }

    public getCertifications(): Array<CertificationsRecordModel> {
        return this.certifications;
    }

    public getPersonal(): Array<SmallRecordModel> {
        return this.personal;
    }

    public getCompetences(): Array<SmallRecordModel> {
        return this.competences;
    }

    public getLanguages(): Array<SmallRecordModel> {
        return this.languages;
    }

    public getInterests(): Array<SmallRecordModel> {
        return this.interests;
    }
}
