import { EmailModel } from './email.model'
import { OrganizationIdModel } from './organization-id.model'
import { OwnerIdModel } from './owner-id.model'
import { PhoneModel } from './phone.model'
import { PictureModel } from './picture.model'

export class PersonsDataModel {
    '18ae195b582c7c4eb8b0ffaff38a69f5bf09b558': any
    'a61150f61605f3f1dda486586ad4b9ab34317d33': any
    active_flag: boolean
    activities_count: number
    add_time: string
    cc_email: string
    closed_deals_count: number
    company_id: number
    done_activities_count: number
    email: EmailModel[]
    email_messages_count: number
    files_count: number
    first_char: string
    first_name: string
    followers_count: number
    id: number
    label: any
    last_activity_date: any
    last_activity_id: any
    last_incoming_mail_time: any
    last_name: string
    last_outgoing_mail_time: any
    lost_deals_count: number
    name: string
    next_activity_date: string
    next_activity_id: number
    next_activity_time: any
    notes_count: number
    open_deals_count: number
    org_id: OrganizationIdModel
    org_name: string
    owner_id: OwnerIdModel
    owner_name: string
    participant_closed_deals_count: number
    participant_open_deals_count: number
    phone: PhoneModel[]
    picture_id: PictureModel
    related_closed_deals_count: number
    related_lost_deals_count: number
    related_open_deals_count: number
    related_won_deals_count: number
    undone_activities_count: number
    update_time: string
    visible_to: string
    won_deals_count: number
}
