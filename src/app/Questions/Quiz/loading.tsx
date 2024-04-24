import { Skeleton } from "../../../components/ui/skeleton"

export default function Loading() {

	return ( 

		<div className="space-y-2">
			<Skeleton className=" w-72 h-12" />
			<div className="space-y-2">
			<Skeleton className=" w-72 h-4" />
			<Skeleton className=" w-72 h-4" />
			<Skeleton className=" w-72 h-4" />
			<Skeleton className=" w-72 h-4" />
			</div>
		</div>
	)
}