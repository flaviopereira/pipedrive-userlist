import { RelatedObjectsModel } from "../related-objects.model"

export abstract class BaseResponseModel<M> {
    success: boolean
    data: M
    related_objects: RelatedObjectsModel
}
